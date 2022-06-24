import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, {
  PropsWithChildren,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
  useContext,
} from "react";
import { defaultVariants, motionVariants } from "../constant/animation";
import { formattedDirection, TDirection, TMotionVariants } from "../constant/Animation";
import { routerSheet } from "../constant/RouterSheet";
import { AppContext } from "../context/context";
import { Types } from "../context/reducers";

export const MotionWrapper: React.FC<
  PropsWithChildren<{ className?: string; customVariant?: any }>
> = (props) => {
  const { children } = props;

  const variants = useMemo(() => {
    return {
      ...defaultVariants,
      exit: {
        ...defaultVariants.exit,
        transition: {
          delay: 0.75,
          duration: 0.75,
        },
      },
    };
  }, []);
  return (
    <motion.div
      className={props.className}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}>
      {children}
    </motion.div>
  );
};

// MotionWrapper.defaultProps = {
//   direction: "left",
// } as Partial<IMotionWrapperProps>;
