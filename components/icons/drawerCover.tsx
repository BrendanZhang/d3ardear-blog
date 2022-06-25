import { motion } from "framer-motion";
import * as React from "react";
import { SVGProps } from "react";
import styled from "styled-components";
const wrapper = {
  hidden: { backgroundColor: "rgba(20, 43, 51, 0)" },
  visible: {
    backgroundColor: "rgba(20, 43, 51, 0.7)",
    transition: {
      backgroundColor: { delay: 0.5, duration: 0.2 },
    },
  },
};

const draw = {
  hidden: { pathLength: 0, opacity: 0, stroke: "rgba(20, 43, 51, 1)" },
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

const DrawerCover = (props: SVGProps<SVGSVGElement>) => (
  <DrawerCoverWrapper initial="hidden" animate="visible" exit="hidden" variants={wrapper}>
    <motion.svg
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 1024 1024"
      initial="hidden"
      animate="visible"
      exit="hidden">
      <motion.path
        d="M1023 2.5S440.5-23 136.5 118c-191.315 88.735-309.559 272.522-370.932 396.58-20.636 41.714 23.975 78.767 64.928 56.66C116.7 416.739 446.801 332.028 884.267 332.551c59.131.071 62.706 80.014 4.871 92.331C404.324 528.131 213.149 673.686-10.111 971.207c-32.919 43.873 20.427 99.203 67.098 70.393C413.467 821.556 625.9 744.714 983.753 723.434c55.727-3.313 73.177 78.976 22.617 102.653C801.671 921.956 527.596 1071.9 389.5 1240"
        stroke="currentColor"
        strokeWidth={382}
        strokeLinecap="round"
        fill="none"
        variants={draw}
      />
    </motion.svg>
  </DrawerCoverWrapper>
);

const DrawerCoverWrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
`;
export default DrawerCover;
