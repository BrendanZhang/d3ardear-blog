import { ArrowLeftRounded, ArrowLeftSharp, KeyboardArrowLeft, Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Link from "next/link";
import styled from "styled-components";
import { HeaderAction, HeaderContainer } from "../../styledComponents/header";

export const BlogHeader = () => {
  const HeaderContainerStyle = {
    color: "#333333",
  };
  return (
    <HeaderContainer>
      <HeaderAction style={HeaderContainerStyle}>
        <section>
          <Link href="/">
            <IconButton aria-label="back" style={IconStyle}>
              <KeyboardArrowLeft />
            </IconButton>
          </Link>
        </section>
        <section>
          <IconButton aria-label="back" style={IconStyle}>
            <Search />
          </IconButton>
        </section>
      </HeaderAction>
    </HeaderContainer>
  );
};

const IconStyle = {
  fontsize: "20px",
  color: "inherit",
  margin: "0 0.5em",
  transition: "color 300ms",
};
