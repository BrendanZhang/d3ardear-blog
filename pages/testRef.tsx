import { useRef } from "react";

export default function TextInputWithFocusButton() {
  const inputEl = useRef<HTMLInputElement>(null);
  const divEl = useRef<HTMLDivElement>(null);
  const onButtonClick = () => {
    // `current` 指向已挂载到 DOM 上的文本输入元素
    inputEl.current?.focus();
    console.log(divEl.current);
  };
  return (
    <>
      <div style={mainStyles} ref={divEl}></div>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}

const mainStyles = {
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
};
