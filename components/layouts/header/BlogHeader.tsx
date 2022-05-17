import { ArrowLeftRounded, ArrowLeftSharp, KeyboardArrowLeft, Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Link from "next/link";
import styled from "styled-components";

export const BlogHeader = () => {
  const HeaderContainerStyle = {
    color: "#333333",
  };
  return (
    <HeaderContainer style={HeaderContainerStyle}>
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
    </HeaderContainer>
  );
};

const IconStyle = {
  fontsize: "20px",
  color: "inherit",
  margin: "0 0.5em",
  transition: "color 300ms",
};
const HeaderContainer = styled.header({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px",
  position: "absolute",
  width: "100%",
  top: 0,
  color: "white",
  zIndex: 10,
});
