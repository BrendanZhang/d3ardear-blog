import { GithubFilled } from "@ant-design/icons";
import { AppsRounded, NotesRounded, TextSnippet } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import Link from "next/link";
import React, { ReactNode, useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import { media } from "../../constant/media";
import { HeaderContainer, HeaderAction } from "../../styledComponents/header";
import Icon from "./icon";
import IconWithTitle from "./iconWithTitle";
import { MenuIcon } from "./menuIcon";

interface IHeader {
  mode: "light" | "dark";
  sticky?: boolean;
}

const ActionButtons: React.FC<{ device: "mobile" | "desktop" }> = (props) => {
  const { device } = props;
  const ActionButtonGenerator = (device: "mobile" | "desktop") => {
    const IconStyle = {
      fontsize: "20px",
      color: "inherit",
      margin: "0 0.5em",
      transition: "color 300ms",
    };
    return device === "mobile"
      ? [
          <Button aria-label="blog" style={IconStyle}>
            BLOG
          </Button>,
          <Button aria-label="github" style={IconStyle}>
            PROJECT
          </Button>,
          // <IconButton aria-label="blog" style={IconStyle}>
          //   <NotesRounded />
          // </IconButton>,
          // <IconButton aria-label="github" style={IconStyle}>
          //   <AppsRounded />
          // </IconButton>,
        ]
      : [
          <Button aria-label="blog" style={IconStyle}>
            BLOG
          </Button>,
          <Button aria-label="github" style={IconStyle}>
            PROJECT
          </Button>,
        ];
  };
  return (
    <>
      <Link href="/blog">{ActionButtonGenerator(device)[0]}</Link>
      <Link href="/portfolio">{ActionButtonGenerator(device)[1]}</Link>
    </>
  );
};

const Header: React.FC<IHeader> = (props) => {
  const { mode, sticky } = props;
  const [menuActive, setMenuAction] = useState(false);
  const isLight = useMemo(() => mode === "light", [mode]);
  const onClickMenu = () => {
    console.log("调用了");
    setMenuAction((prevMenuAction) => !prevMenuAction);
    console.log(menuActive);
  };
  const IconStyle = {
    fontSize: "20px",
    color: "inherit",
    // margin: "0 0.5em",
    transition: "all 300ms",
    filter: menuActive
      ? "drop-shadow(rgb(240, 73, 44) 0px 0px 2px)"
      : "drop-shadow(rgb(240, 73, 44) 0px 0px 0px)",
  };
  const HeaderContainerStyle = {
    transition: "color 300ms",
    color: isLight ? "#eeeeee" : "#555555",
  };
  return (
    <HeaderContainer>
      <HeaderAction style={HeaderContainerStyle}>
        <StyledIconContainer>
          {/* <Icon fill={HeaderContainerStyle.color} height="46px" /> */}
          <IconWithTitle fill={HeaderContainerStyle.color} height="46px" />
        </StyledIconContainer>
        <DesktopAction>
          <ActionButtons device="desktop" />
        </DesktopAction>
        <MobileAction>
          <ActionButtons device="mobile" />
        </MobileAction>
        <div>
          <IconButton aria-label="github" style={IconStyle} onClick={onClickMenu}>
            <MenuIcon
              active={menuActive}
              width="30px"
              height="30px"
              fill={HeaderContainerStyle.color}
            />
          </IconButton>
        </div>
      </HeaderAction>
    </HeaderContainer>
  );
};
const MobileAction = styled.div`
  display: inline-flex;
  color: inherit;

  ${media("tablet")} {
    display: none;
  }
`;

const DesktopAction = styled.div`
  display: none;

  ${media("tablet")} {
    display: inline-flex;
    color: inherit;
  }
`;

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
