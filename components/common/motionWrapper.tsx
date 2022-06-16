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
import { motionVariants } from "../constant/animation";
import { formattedDirection, TDirection, TMotionVariants } from "../constant/Animation";
import { routerSheet } from "../constant/routerSheet";
import { AppContext } from "../context/context";
import { Types } from "../context/reducers";

export const MotionWrapper: React.FC<PropsWithChildren<{}>> = (props) => {
  const { children } = props;
  const { state, dispatch } = useContext(AppContext);

  const direction = useMemo(() => {
    return state.motion.direction;
  }, [state]);
  const setDirection = useCallback(
    (direction: TDirection) => {
      dispatch({
        type: Types.Set,
        payload: {
          direction: direction,
        },
      });
    },
    [state]
  );
  const motionDirection = useMemo<keyof TMotionVariants>(
    () =>
      ("motion" +
        direction.replace(
          direction[0],
          direction[0].toUpperCase()
        )) as formattedDirection<TDirection>,
    [direction]
  );
  const router = useRouter();
  const pathName = router.pathname;
  const animationDirection: (url: string) => { [k in TDirection]: boolean } = (url: string) => {
    return {
      left: routerSheet.indexOf(url) > 0 && routerSheet.indexOf(pathName) === 0,
      right: routerSheet.indexOf(url) === 0,
      up:
        routerSheet.indexOf(url) < 0 ||
        (routerSheet.indexOf(url) === 1 && routerSheet.indexOf(pathName) === 2),
      down:
        routerSheet.indexOf(pathName) === 2 &&
        routerSheet.indexOf(pathName) < routerSheet.indexOf(url) &&
        routerSheet.indexOf(url) !== 0,
    };
  };
  const routerChangeHandler = useCallback((url: string) => {
    setDirection(
      (Object.keys(animationDirection(url)) as TDirection[]).filter(
        (action) => animationDirection(url)[action] === true
      )[0]
    );
    console.log(animationDirection(url));
  }, []);
  useEffect(() => {
    router.events.on("routeChangeStart", routerChangeHandler);
    return () => {
      router.events.off("routeChangeStart", routerChangeHandler);
    };
  }, []);

  const variants = useMemo(() => {
    console.log(direction);
    return motionVariants[motionDirection];
  }, [motionDirection]);
  return (
    <motion.div initial="initial" animate="enter" exit="exit" variants={variants}>
      {children}
    </motion.div>
  );
};

// MotionWrapper.defaultProps = {
//   direction: "left",
// } as Partial<IMotionWrapperProps>;
