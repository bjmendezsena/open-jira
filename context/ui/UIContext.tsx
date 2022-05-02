import { createContext, Dispatch } from "react";

interface ContextProps {
  sideMenu: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
  openSideMenu: () => void;
  closeSideMenu: () => void;
  setIsAddingEntry: (isAddingEntry: boolean) => void;
  startDragging: () => void;
  stopDragging: () => void;
}

export const UIContext = createContext({} as ContextProps);
