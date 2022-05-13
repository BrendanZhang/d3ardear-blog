import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <StyledP>© D3arDear</StyledP>
      <StyledA href="https://beian.miit.gov.cn/">蜀ICP备18039418号</StyledA>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  height: 50px;
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 0;
  justify-content: center;
  align-items: center;
`;

const StyledA = styled.a`
  color: #666;
  font-size: 12px;
  padding-left: 0.5em;
  text-decoration: none;
  line-height: 1;
`;

const StyledP = styled.p`
  color: #666;
  font-size: 12px;
  padding-right: 0.5em;
  line-height: 1;
`;
export default Footer;
