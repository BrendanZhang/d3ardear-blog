export type TDirection = "left" | "right" | "down" | "up";
export type formattedDirection<T extends string> = `motion${Capitalize<T>}`;
export type TMotionVariants = {
  [k in formattedDirection<TDirection>]: any;
};
