import { FC, useReducer, useEffect } from "react";
import { useSnackbar } from "notistack";
import { entriesApi } from "../../apis";
import { Entry } from "../../interfaces";
import { EntriesContext, entriesReducer } from "./";

export interface EntriesState {
  entries: Entry[];
  isLoading: boolean;
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [],
  isLoading: false,
};

export const EntriesProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  const { enqueueSnackbar } = useSnackbar();

  const refreshEntries = async () => {
    setIsLoading(true);
    try {
      const { data } = await entriesApi.get<Entry[]>("/entries");
      dispatch({ type: "[Entry]- Refresh-data", payload: data });
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    refreshEntries();
  }, []);

  const addEntry = async (description: string) => {
    setIsLoading(true);
    try {
      const { data } = await entriesApi.post<Entry>("/entries", {
        description,
      });

      dispatch({ type: "[Entry]- Add-Entry", payload: data });
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const updateEntry = async (
    { _id, description, status }: Entry,
    showSnackbar = false
  ) => {
    setIsLoading(true);
    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, {
        description: description,
        status: status,
      });
      dispatch({ type: "[Entry]- Entry-Updated", payload: data });
      if (showSnackbar) {
        enqueueSnackbar("Entrada actualizada", {
          variant: "success",
          autoHideDuration: 1500,
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const setIsLoading = (isLoading: boolean) => {
    dispatch({ type: "[Entry]- SET-IS-LOADING", payload: isLoading });
  };

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        addEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
