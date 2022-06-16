import { MotionContextProps } from "framer-motion/types/context/MotionContext";
import React, { createContext, PropsWithChildren, useReducer } from "react";
import { TDirection } from "../constant/Animation";
import { TInitialState } from "./Context";
import { MotionActions, motionReducer } from "./reducers";

const initialState: TInitialState = {
  motion: { direction: "up" },
};

const AppContext = createContext<{
  state: TInitialState;
  dispatch: React.Dispatch<MotionActions>;
}>({
  state: initialState,
  dispatch: () => null,
});
const mainReducer = ({ motion }: TInitialState, action: MotionActions) => ({
  motion: motionReducer(motion, action),
});

const AppProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
