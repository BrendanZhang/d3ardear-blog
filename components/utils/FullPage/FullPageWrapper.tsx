import styled from "styled-components";

const FullPageWrapper = (props: any) => {
  return <PageWrapper>{props.children}</PageWrapper>;
};

const PageWrapper = styled.div`
  position: relative;
  top: 0;
`;

export default FullPageWrapper;
