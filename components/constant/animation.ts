import { TMotionVariants } from "./Animation";

const duration = 0.75;
const width = 10;
const height = 10;
const scale = 0.95;
const motionLeft = {
  initial: {
    opacity: 0,
    scale: scale,
    x: `-${width}vw`,
    transition: { duration: duration, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  enter: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: duration, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  exit: {
    opacity: 0,
    scale: scale,
    x: `-${width}vw`,
    transition: { duration: duration, ease: [0.48, 0.15, 0.25, 0.96] },
  },
};
const motionRight = {
  ...motionLeft,
  initial: {
    ...motionLeft.exit,
    x: `${width}vw`,
  },
  exit: {
    ...motionLeft.initial,
    x: `${width}vw`,
  },
};
const motionDown = {
  ...motionRight,
  initial: {
    ...motionRight.initial,
    x: 0,
    y: `${height}vh`,
  },
  enter: {
    ...motionRight.enter,
    x: 0,
    y: 0,
  },
  exit: {
    ...motionRight.initial,
    x: 0,
    y: `${height}vh`,
  },
};
const motionUp = {
  ...motionDown,
  initial: {
    ...motionDown.initial,
    y: `-${height}vh`,
  },
  exit: {
    ...motionDown.initial,
    y: `-${height}vh`,
  },
};

export const motionVariants: TMotionVariants = { motionRight, motionLeft, motionUp, motionDown };
