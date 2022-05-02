import { FC, useReducer, useState } from "react";
import { UIContext, uiReducer } from "./";

export interface UiState {
  sideMenu: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}

const UI_INITIAL_STATE: UiState = {
  sideMenu: false,
  isAddingEntry: false,
  isDragging: false,
};

export const UiProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const setIsAddingEntry = (isAddingEntry: boolean) => {
    dispatch({ type: "[UI] - Set isAddingEntry", payload: isAddingEntry });
  };
  const openSideMenu = () => {
    dispatch({ type: "[UI] - Open Sidebar" });
  };

  const closeSideMenu = () => {
    dispatch({ type: "[UI] - Close Sidebar" });
  };

  const startDragging = () => {
    dispatch({ type: "[UI] - Start dragging" });
  };

  const stopDragging = () => {
    dispatch({ type: "[UI] - End dragging" });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        openSideMenu,
        closeSideMenu,
        setIsAddingEntry,
        startDragging,
        stopDragging,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
