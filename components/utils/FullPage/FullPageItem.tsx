import { useState, useEffect } from "react";
import styled from "styled-components";

const FullPageItem = () => {
  const [clientHeight, setClientHeight] = useState<string>("");
  const resize = () => {
    setClientHeight(document.documentElement.clientHeight + "px");
  };
  useEffect(() => {
    resize();
    document.addEventListener("resize", () => resize());
  }, []);
  return (
    <>
      <PageItem height={clientHeight}></PageItem>
    </>
  );
};

const PageItem = styled.section<{ height: string }>`
  height: ${(props) => (props.height ? props.height : "100%")};
`;

export default FullPageItem;
