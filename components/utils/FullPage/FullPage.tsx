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
import { DEFAULT_PAGE_INDEX, DEFAULT_PAGE_TO_RENDER_LENGTH, DISABLED_CLASS_NAME } from "./constant";
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

  const {
    children,
    onBeforePageScroll,
    animationDuration,
    transitionFunction,
    renderAllPagesOnMount,
  } = props;
  // toArray().length 会返回渲染出的子节点
  // Children.count 会返回所有子节点，无论是否渲染
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
  const addNextPage = useCallback(
    (pagesToRenderAndMountLength: number) => {
      let templateLength = 0;
      !isEmpty(pagesToRenderAndMountLength) && (templateLength = pagesToRenderAndMountLength);

      // 看一下需要多渲染几个，是不是和现在需要渲染的子节点数一样多
      templateLength = Math.max(templateLength, pageToRenderLength);
      // 如果只需要多加一个，而且新增的页面存在，那就添加一个
      templateLength <= pageIndex + 1 && !isEmpty(childrenArr[pageIndex + 1]) && templateLength++;
      setPageToRenderLength(templateLength);
    },
    [pageToRenderLength, pageIndex, childrenArr]
  );

  const checkRenderOnMount = useCallback(() => {
    if (renderAllPagesOnMount) {
      // 如果设定首次渲染就渲染所有页面，则记录所有节点数
      setPageToRenderLength(React.Children.count(children));
    } else if (!isEmpty(childrenArr[DEFAULT_PAGE_INDEX + 1])) {
      addNextPage(DEFAULT_PAGE_TO_RENDER_LENGTH + 1);
    }
  }, [renderAllPagesOnMount, children, childrenArr, addNextPage]);

  // 如果滑到头了，阻止滑动且退回去
  const disableScroll = useCallback(() => {
    if (isBodyScrollEnabled.current) {
      isBodyScrollEnabled.current = false;
      window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
      });
      document.body.classList.add(DISABLED_CLASS_NAME);
      document.documentElement.classList.add(DISABLED_CLASS_NAME);
    }
  }, []);

  const enableScroll = useCallback(() => {
    if (!isBodyScrollEnabled.current) {
      isBodyScrollEnabled.current = true;
      document.body.classList.remove(DISABLED_CLASS_NAME);
      document.documentElement.classList.remove(DISABLED_CLASS_NAME);
    }
  }, []);

  const setRenderPages = useCallback(() => {}, []);

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
