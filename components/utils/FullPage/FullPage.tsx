import { ConsoleSqlOutlined } from "@ant-design/icons";
import React, { useCallback } from "react";
import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  WheelEvent,
  WheelEventHandler,
} from "react";
import styled from "styled-components";
import { DEFAULT_PAGE_INDEX, DEFAULT_PAGE_TO_RENDER_LENGTH } from "./constant";
import { usePrevIndex } from "./FullPageHooks";
import { pageStyle, wrapperStyle } from "./styles";
import { isEmpty } from "./utils";

const FullPage = (props: IFullPageProps) => {
  // flag 变量
  const previousTouchMove = useRef(null),
    isScrolling = useRef(false),
    isMounted = useRef(false),
    isBodyScrollEnabled = useRef(true),
    isTransitionAfterPageToRenderChanged = useRef(false);

  const { children, onBeforePageScroll, animationDuration, transitionFunction } = props;
  const childrenArr = useMemo(() => React.Children.toArray(children), [children]);

  // 页码
  const [pageIndex, setPageIndex] = useState(DEFAULT_PAGE_INDEX);
  const [pageToRenderLength, setPageToRenderLength] = useState(DEFAULT_PAGE_TO_RENDER_LENGTH);
  const prevPageIndex = usePrevIndex(pageIndex);

  // 获取元素
  const wrapperRef = useRef<HTMLDivElement>(null),
    pageRef = useRef<HTMLDivElement>(null),
    lastScrollElRef = useRef<HTMLDivElement>(null);

  // 滚动函数
  const scrollPage = useCallback(
    (nextPageIndex: number) => {
      onBeforePageScroll && onBeforePageScroll(nextPageIndex);
      wrapperRef.current &&
        (wrapperRef.current.style.transform = `translate3d(0, ${nextPageIndex * -100}%, 0)`);
    },
    [onBeforePageScroll]
  );

  // 滚动动画的时候中间有可能同时有多个页面被渲染（比如从 2 到 0）
  // 这时候需要挂载多个 page
  const addNextPage = useCallback((pagesToRenderAndMountLength: number) => {
    let templateCount = 0;
    !isEmpty(pagesToRenderAndMountLength) && (templateCount = pagesToRenderAndMountLength);
    Math.max(templateCount, pagesToRenderAndMountLength);
  }, []);

  return (
    <main ref={wrapperRef} style={wrapperStyle}>
      <div
        ref={pageRef}
        style={{
          ...pageStyle,
          transition: `transform ${animationDuration}ms ${transitionFunction}`,
        }}></div>
      {props.children}
    </main>
  );
};

export default FullPage;
