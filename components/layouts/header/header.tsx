import { GithubFilled } from "@ant-design/icons";
import { AppsRounded, NotesRounded, TextSnippet } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import Link from "next/link";
import React, { ReactNode, useMemo } from "react";
import styled from "styled-components";
import { media } from "../../constant/media";
import { HeaderContainer, HeaderAction } from "../../styledComponents/header";
import Icon from "./icon";

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
          <IconButton aria-label="blog" style={IconStyle}>
            <NotesRounded />
          </IconButton>,
          <IconButton aria-label="github" style={IconStyle}>
            <AppsRounded />
          </IconButton>,
        ]
      : [
          <Button aria-label="blog" style={IconStyle} startIcon={<NotesRounded />}>
            博客
          </Button>,
          <Button aria-label="github" style={IconStyle} startIcon={<AppsRounded />}>
            开源项目
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
  const isLight = useMemo(() => mode === "light", [mode]);
  const IconStyle = {
    fontsize: "20px",
    color: "inherit",
    margin: "0 0.5em",
    transition: "color 300ms",
  };
  const HeaderContainerStyle = {
    transition: "color 300ms",
    color: isLight ? "#eeeeee" : "#333333",
  };
  return (
    <HeaderContainer>
      <HeaderAction style={HeaderContainerStyle}>
        <StyledIconContainer>
          <Icon fill={HeaderContainerStyle.color} weight="34px" height="34px" />
          <StyledH1>D3arDear</StyledH1>
        </StyledIconContainer>
        <DesktopAction>
          <ActionButtons device="desktop" />
        </DesktopAction>
        <MobileAction>
          <ActionButtons device="mobile" />
        </MobileAction>
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

  ${media("tablet")} {
    display: inline;
    font-size: 30px;
    line-height: 1.15;
    color: inherit;
    margin: 0 0 0 12px;
  }
`;

export default Header;
