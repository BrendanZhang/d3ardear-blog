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

const drawWrapper = {
  hidden: { backgroundColor: "rgba(20, 43, 51, 0)" },
  exit: {
    opacity: 0,
  },
  visible: {
    backgroundColor: "rgba(20, 43, 51, 0.85)",
    transition: {
      backgroundColor: { delay: 0.5, duration: 0.2 },
    },
  },
};

const draw = {
  hidden: { pathLength: 0, opacity: 0, stroke: "rgba(20, 43, 51, 1)" },
  exit: {
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    stroke: "rgba(20, 43, 51, 0)",
    transition: {
      pathLength: {
        type: "spring",
        duration: 1.5,
        bounce: 0,
        ease: "backInOut",
      },
      opacity: { duration: 0.01 },
      stroke: { delay: 0.5, duration: 1.5 },
    },
  },
};

const drawDelay = {
  transition: {
    delay: 0.75,
    duration: 0.75,
    ease: "backInOut",
  },
};

export const drawVariants = {
  draw,
  drawWrapper,
};

export const drawVariantsDelay = {
  draw: { ...draw, exit: { ...draw.exit, ...drawDelay } },
  drawWrapper: {
    ...drawWrapper,
    exit: { ...drawWrapper.exit, ...drawDelay },
  },
};
