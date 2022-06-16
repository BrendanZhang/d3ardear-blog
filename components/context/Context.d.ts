import { TDirection } from "../constant/Animation";

export type TInitialState = {
  motion: { direction: TDirection };
};

export type TMotionState = {
  direction: TDirection;
};
