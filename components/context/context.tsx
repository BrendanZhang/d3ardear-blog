import { MotionContextProps } from "framer-motion/types/context/MotionContext";
import React, { createContext, PropsWithChildren, useReducer } from "react";
import { TDirection } from "../constant/Animation";
import { directionReducer } from "./reducer";

type InitialStateType = {
  direction: TDirection;
};

const initialState: InitialStateType = {
  direction: "up",
};

const MotionContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});
const mainReducer = ({ direction }: InitialStateType, action) => ({
  direction: directionReducer(direction, action),
});

const MotionProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return <MotionContext.Provider value={{ state, dispatch }}>{children}</MotionContext.Provider>;
};

export { MotionContext, MotionProvider };
