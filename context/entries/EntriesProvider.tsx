import { FC, useReducer } from "react";
import { v4 as uuid } from "uuid";
import { Entry } from "../../interfaces";
import { EntriesContext, entriesReducer } from "./";

export interface EntriesState {
  entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuid(),
      description:
        "Pending: Nulla amet deserunt culpa aliqua laboris pariatur culpa et eiusmod laborum ullamco esse mollit reprehenderit.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      _id: uuid(),
      description:
        "In-progress: Cupidatat Lorem quis exercitation Lorem culpa quis occaecat mollit velit ad.",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      _id: uuid(),
      description:
        "Finished: Id adipisicing excepteur est ex laborum mollit mollit ex et non.",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  ],
};

export const EntriesProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  const addEntry = (description: string) => {
    console.log("addEntry");
    const newEntry: Entry = {
      _id: uuid(),
      description,
      status: "pending",
      createdAt: Date.now(),
    };
    dispatch({ type: "[Entry]- Add-Entry", payload: newEntry });
  };

  const updateEntry = (entry: Entry) => {
    dispatch({ type: "[Entry]- Entry-Updated", payload: entry });
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
