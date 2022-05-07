import { Entry } from "../../interfaces";
import { EntriesState } from "./";

type EntriesActionType =
  | {
      type: "[Entry]- Add-Entry";
      payload: Entry;
    }
  | {
      type: "[Entry]- Entry-Updated";
      payload: Entry;
    }
  | {
      type: "[Entry]- Refresh-data";
      payload: Entry[];
    }
  | {
      type: "[Entry]- SET-IS-LOADING";
      payload: boolean;
    };

export const entriesReducer = (
  state: EntriesState,
  action: EntriesActionType
): EntriesState => {
  switch (action.type) {
    case "[Entry]- Add-Entry":
      return {
        ...state,
        entries: [action.payload, ...state.entries],
      };
    case "[Entry]- Entry-Updated":
      return {
        ...state,
        entries: state.entries.map((entry) => {
          if (entry._id === action.payload._id) {
            entry.status = action.payload.status;
            entry.description = action.payload.description;
          }
          return entry;
        }),
      };
    case "[Entry]- Refresh-data":
      return {
        ...state,
        entries: [...action.payload],
      };

    case "[Entry]- SET-IS-LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
