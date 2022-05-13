import { GithubFilled } from "@ant-design/icons";
import { TextSnippet } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <div></div>
      <div>
        <IconButton aria-label="blog" style={IconStyle}>
          <TextSnippet />
        </IconButton>
        <IconButton aria-label="github" style={IconStyle}>
          <GithubFilled />
        </IconButton>
      </div>
    </HeaderContainer>
  );
};

const IconStyle = {
  fontsize: "20px",
  color: "#eeeeee",
  margin: "0 0.5em",
};

const HeaderContainer = styled.header({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  padding: "20px",
  position: "absolute",
  width: "100%",
  top: 0,
  color: "white",
});

export default Header;
