import { motion, Variants } from "framer-motion";
import * as React from "react";
import { SVGProps } from "react";
import styled from "styled-components";
import { drawVariants, drawVariantsDelay } from "../constant/animation";

const DrawerCover = (
  props: SVGProps<SVGSVGElement> & {
    vertical?: boolean;
  }
) => {
  const pathD = React.useMemo(
    () =>
      props.vertical
        ? "M430.434 -310.128C430.434 -310.128 23.0022 152.624 -74.9696 487.289C-136.518 697.533 -79.12 905.192 -27.9345 1030.54C-10.4745 1073.29 45.8009 1064.39 56.0709 1019.36C130.44 693.295 284.454 373.557 570.827 18.2399C608.355 -28.3237 673.283 20.1324 645.31 72.991C408.7 520.084 390.146 763.055 460.539 1119.17C471.188 1173.04 547.902 1170.12 557.289 1116.02C631.016 691.057 714.394 469.831 933.218 166.655C966.408 120.671 1042.57 161.226 1027.02 215.764C962.962 440.469 895.398 746.873 927.491 956.999"
        : "M1023 2.5S440.5-23 136.5 118c-191.315 88.735-309.559 272.522-370.932 396.58-20.636 41.714 23.975 78.767 64.928 56.66C116.7 416.739 446.801 332.028 884.267 332.551c59.131.071 62.706 80.014 4.871 92.331C404.324 528.131 213.149 673.686-10.111 971.207c-32.919 43.873 20.427 99.203 67.098 70.393C413.467 821.556 625.9 744.714 983.753 723.434c55.727-3.313 73.177 78.976 22.617 102.653C801.671 921.956 527.596 1071.9 389.5 1240",
    [props.vertical]
  );
  const variants = React.useMemo(
    () => (props.vertical ? drawVariantsDelay : drawVariants),
    [props.vertical]
  );
  return (
    <DrawerCoverWrapper
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants.drawWrapper}>
      <motion.svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 1024 1024"
        initial="hidden"
        animate="visible"
        exit="exit">
        <motion.path
          d={pathD}
          stroke="currentColor"
          strokeWidth={382}
          strokeLinecap="round"
          fill="none"
          variants={variants.draw}
        />
      </motion.svg>
    </DrawerCoverWrapper>
  );
};

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
