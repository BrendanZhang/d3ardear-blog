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
  animate: {
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
const motionUp = {
  ...motionRight,
  initial: {
    ...motionRight.initial,
    x: 0,
    y: `${height}vh`,
  },
  animate: {
    ...motionRight.animate,
    x: 0,
    y: 0,
    transition: {
      delay: 1,
      duration: 0.75,
    },
  },
  exit: {
    ...motionRight.initial,
    x: 0,
    y: `-${height}vh`,
    transition: {
      duration: 1,
    },
  },
};
const motionDown = {
  ...motionUp,
  initial: {
    ...motionUp.initial,
    y: `-${height}vh`,
  },
  exit: {
    ...motionUp.initial,
    y: `-${height}vh`,
  },
};

export const motionVariants: TMotionVariants = {
  motionRight,
  motionLeft,
  motionUp,
  motionDown,
};
export const defaultVariants = {
  animate: {
    opacity: 1,
  },
  initial: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
  },
};

export const defaultMotionProps = {
  animate: "animate",
  exit: "exit",
  initial: "initial",
};
