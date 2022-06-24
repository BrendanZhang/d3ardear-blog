import { GithubFilled } from "@ant-design/icons";
import { AppsRounded, NotesRounded, TextSnippet } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import React, { ReactNode, useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import { defaultVariants } from "../../constant/animation";
import { media } from "../../constant/media";
import { HeaderContainer, HeaderAction } from "../../styledComponents/header";
import { ActionButtons } from "./actionButton";
import { DesktopDrawer } from "./desktopActionDrawer";
import Icon from "../../icons/icon";
import IconWithTitle from "../../icons/iconWithTitle";
import { MenuIcon } from "../../icons/menuIcon";
import { MobileDrawer } from "./mobileActionDrawer";

interface IHeader {
  mode: "light" | "dark";
  sticky?: boolean;
}

const Header: React.FC<IHeader> = (props) => {
  const { mode, sticky } = props;
  const [menuActive, setMenuAction] = useState(false);
  const isLight = useMemo(() => mode === "light", [mode]);
  const onClickMenu = () => {
    setMenuAction((prevMenuAction) => !prevMenuAction);
  };
  const IconStyle = useMemo(() => {
    return {
      fontSize: "20px",
      color: "inherit",
      zIndex: menuActive ? "10" : "5",
      transition: "all 300ms",
      filter: menuActive
        ? "drop-shadow(rgb(240, 73, 44) 0px 0px 2px)"
        : "drop-shadow(rgb(240, 73, 44) 0px 0px 0px)",
    };
  }, [menuActive]);
  const HeaderContainerStyle = {
    transition: "color 300ms",
    color: isLight ? "#eeeeee" : "#555555",
  };
  return (
    <HeaderContainer initial="initial" exit="exit" animate="animate" variants={defaultVariants}>
      <HeaderAction style={HeaderContainerStyle}>
        <StyledIconContainer>
          <IconWithTitle fill={HeaderContainerStyle.color} height="46px" />
        </StyledIconContainer>
        <AnimatePresence exitBeforeEnter>
          {/* {menuActive && (
            <DesktopDrawer>
              <ActionButtons device="desktop" active={true} />
            </DesktopDrawer>
          )} */}
          {menuActive && (
            <div style={{ position: "absolute", top: "0", left: "0", right: "0", bottom: "0" }}>
              <MobileDrawer>
                <ActionButtons device="mobile" active={true} />
              </MobileDrawer>
            </div>
          )}
        </AnimatePresence>
        <AnimatePresence exitBeforeEnter>
          {menuActive && (
            <div style={{ position: "absolute", top: "0", left: "0", right: "0", bottom: "0" }}>
              <MobileDrawer>
                <ActionButtons device="mobile" active={true} />
              </MobileDrawer>
            </div>
          )}
        </AnimatePresence>
        <div>
          <IconButton aria-label="github" style={IconStyle} onClick={onClickMenu}>
            <MenuIcon
              active={menuActive}
              width="30px"
              height="30px"
              fill={menuActive ? "#eeeeee" : HeaderContainerStyle.color}
            />
          </IconButton>
        </div>
      </HeaderAction>
    </HeaderContainer>
  );
};

const StyledIconContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
  color: inherit;
`;
const StyledH1 = styled.h1`
  display: none;
  font-weight: normal;

  ${media("tablet")} {
    display: inline;
    font-size: 28px;
    line-height: 1.15;
    color: inherit;
    margin: 0 0 0 12px;
  }
`;

export default Header;
