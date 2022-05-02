import { UiState } from "./";

type UIActionType =
  | {
      type: "[UI] - Open Sidebar";
    }
  | {
      type: "[UI] - Close Sidebar";
    }
  | {
      type: "[UI] - Set isAddingEntry";
      payload: boolean;
    }
  | {
      type: "[UI] - Start dragging";
    }
  | {
      type: "[UI] - End dragging";
    };

export const uiReducer = (state: UiState, action: UIActionType): UiState => {
  switch (action.type) {
    case "[UI] - Open Sidebar":
      return {
        ...state,
        sideMenu: true,
      };

    case "[UI] - Close Sidebar":
      return {
        ...state,
        sideMenu: false,
      };

    case "[UI] - Set isAddingEntry":
      return {
        ...state,
        isAddingEntry: action.payload,
      };
    case "[UI] - Start dragging":
      return {
        ...state,
        isDragging: true,
      };
    case "[UI] - End dragging":
      return {
        ...state,
        isDragging: false,
      };

    default:
      return state;
  }
};
