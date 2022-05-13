import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <div>D3arDear</div>
      <div style={{ display: "inline-flex" }}></div>
    </HeaderContainer>
  );
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
});

export default Header;
