import { TDirection } from "../constant/Animation";
import { TMotionState } from "./Context";

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  Set = "SET_DIRECTION",
}

type MotionPayload = {
  [Types.Set]: {
    direction: TDirection;
  };
};
export type MotionActions = ActionMap<MotionPayload>[keyof ActionMap<MotionPayload>];

export const motionReducer = (state: TMotionState, action: MotionActions) => {
  switch (action.type) {
    case Types.Set:
      return {
        ...state,
        direction: action.payload.direction,
      };
    default:
      return state;
  }
};
