import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, {
  PropsWithChildren,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { motionVariants } from "../constant/animation";
import { formattedDirection, TDirection, TMotionVariants } from "../constant/Animation";
import { routerSheet } from "../constant/routerSheet";

export const MotionWrapper: React.FC<PropsWithChildren<{}>> = (props) => {
  const { children } = props;
  const [direction, setDirection] = useState<TDirection>("up");
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
  const routerChangeHandler = useCallback((url: string) => {
    const actions: { [k in TDirection]: boolean } = {
      right: routerSheet.indexOf(url) === 0,
      left: routerSheet.indexOf(url) > 0,
      up:
        routerSheet.indexOf(url) < 0 ||
        (routerSheet.indexOf(url) === 1 && routerSheet.indexOf(pathName) === 2),
      down:
        routerSheet.indexOf(pathName) === 2 &&
        routerSheet.indexOf(pathName) < routerSheet.indexOf(url) &&
        routerSheet.indexOf(url) !== 0,
    };
    console.log(actions);
    setDirection(
      (Object.keys(actions) as TDirection[]).filter((action) => actions[action] === true)[0]
    );
  }, []);
  useEffect(() => {
    router.events.on("routeChangeStart", routerChangeHandler);
  }, []);

  const variants = useMemo(() => {
    return motionVariants[motionDirection];
  }, [motionDirection]);
  console.log(direction);
  return (
    <motion.div initial="initial" animate="enter" exit="exit" variants={variants}>
      {children}
    </motion.div>
  );
};

// MotionWrapper.defaultProps = {
//   direction: "left",
// } as Partial<IMotionWrapperProps>;
