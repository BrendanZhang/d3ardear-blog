import { ConsoleSqlOutlined } from "@ant-design/icons";
import { Props } from "next/script";
import React, { ReactElement, useCallback } from "react";
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
import {
  DEFAULT_ANIMATION_DELAY,
  DEFAULT_ANIMATION_DURATION,
  DEFAULT_ANIMATION_TRANSITION_FUNCTION,
  DEFAULT_CONTAINER_HEIGHT,
  DEFAULT_CONTAINER_WIDTH,
  DEFAULT_PAGE_INDEX,
  DEFAULT_PAGE_TO_RENDER_LENGTH,
  DISABLED_CLASS_NAME,
  KEY_DOWN,
  KEY_UP,
  MINIMAL_DELTA_Y,
} from "./constant";
import { usePrevIndex } from "./FullPageHooks";
import { pageStyle, wrapperStyle } from "./styles";
import { isEmpty } from "./utils";

const FullPage = (props: IFullPageProps) => {
  // flag 变量
  const previousTouchMove = useRef<number | null>(null),
    isScrolling = useRef<boolean>(false),
    isMounted = useRef<boolean>(false),
    isBodyScrollEnabled = useRef<boolean>(true),
    isTransitionAfterPageToRenderChanged = useRef<boolean>(false),
    containers = useRef<boolean[]>([]);

  const {
    children,
    onBeforePageScroll,
    animationDuration,
    transitionFunction,
    renderAllPagesOnMount,
    disableScrollDown,
    disableScrollUp,
    animationDelay,
    scrollUnavailableHandler,
    onPageChange,
    customPageIndex,
  } = props;
  // toArray().length 会返回渲染出的子节点
  // Children.count 会返回所有子节点，无论是否渲染
  const childrenArr = useMemo<React.ReactNode[]>(
    () => React.Children.toArray(children),
    [children]
  );

  // 页码
  const [pageIndex, setPageIndex] = useState(DEFAULT_PAGE_INDEX);
  const [pagesToRenderLength, setPagesToRenderLength] = useState(DEFAULT_PAGE_TO_RENDER_LENGTH);
  const prevPageIndex = usePrevIndex(pageIndex);

  // 获取元素
  const wrapperRef = useRef<HTMLDivElement | null>(null),
    pageRef = useRef<HTMLDivElement | null>(null);

  // 滚动函数
  const scrollPage = useCallback(
    (nextPageIndex: number) => {
      onBeforePageScroll && onBeforePageScroll(nextPageIndex);
      pageRef.current &&
        (pageRef.current.style.transform = `translate3d(0, ${nextPageIndex * -100}%, 0)`);
    },
    [onBeforePageScroll]
  );

  // 滚动动画的时候中间有可能同时有多个页面被渲染（比如从 0 到 2）
  // 这时候需要挂载多个 page
  const addNextPage = useCallback(
    (pagesToRenderAndMountLength: number | null) => {
      let templateLength = 0;
      !isEmpty(pagesToRenderAndMountLength) &&
        (templateLength = pagesToRenderAndMountLength as number);

      // 看一下需要多渲染几个，是不是和现在需要渲染的子节点数一样多
      templateLength = Math.max(templateLength, pagesToRenderLength);
      // 如果只需要多加一个，而且新增的页面存在，那就添加一个
      templateLength <= pageIndex + 1 && !isEmpty(childrenArr[pageIndex + 1]) && templateLength++;
      setPagesToRenderLength(templateLength);
    },
    [pagesToRenderLength, pageIndex, childrenArr]
  );

  const checkRenderOnMount = useCallback(() => {
    if (renderAllPagesOnMount) {
      // 如果设定首次渲染就渲染所有页面，则记录所有节点数
      setPagesToRenderLength(React.Children.count(children));
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

  const setRenderPages = useCallback(() => {
    const newPageToRender = [];
    let i = 0;
    while (i < pagesToRenderLength && !isEmpty(childrenArr[i])) {
      containers.current[i] = true;
      newPageToRender.push(
        <div key={i} style={{ height: "100%", width: "100%" }}>
          {React.cloneElement((childrenArr as ReactElement[])[i], {
            ...(childrenArr as ReactElement[])[i].props,
          })}
        </div>
      );
      i++;
    }
    return newPageToRender;
  }, [childrenArr, pagesToRenderLength]);

  const scrollWindow = useCallback(
    (direction: "up" | "down") => {
      const directionData = {
        down: {
          indexMove: 1,
          disableCheck: disableScrollDown,
        },
        up: {
          indexMove: -1,
          disableCheck: disableScrollUp,
        },
      };
      if (!isScrolling.current && !directionData[direction].disableCheck) {
        if (!isEmpty(containers.current[pageIndex + directionData[direction].indexMove])) {
          disableScroll();
          isScrolling.current = true;
          scrollPage(pageIndex + directionData[direction].indexMove);

          setTimeout(() => {
            if (isMounted) {
              setPageIndex((prevState) => prevState + directionData[direction].indexMove);
            }
          }, (animationDuration as number) + (animationDelay as number));
        } else {
          enableScroll();
          if (scrollUnavailableHandler) {
            scrollUnavailableHandler();
          }
        }
      }
    },
    [
      animationDuration,
      animationDelay,
      disableScrollDown,
      disableScrollUp,
      pageIndex,
      disableScroll,
      enableScroll,
      scrollUnavailableHandler,
      scrollPage,
    ]
  );

  const wheelScroll = useCallback(
    (event: WheelEvent) => {
      if (Math.abs(event.deltaY) > MINIMAL_DELTA_Y) {
        if (event.deltaY > 0) {
          scrollWindow("down");
        } else {
          scrollWindow("up");
        }
      }
    },
    [scrollWindow]
  );

  const touchMove = useCallback(
    (event: TouchEvent) => {
      if (!isEmpty(previousTouchMove.current)) {
        if (event.touches[0].clientY > (previousTouchMove.current as number)) {
          scrollWindow("up");
        } else {
          scrollWindow("down");
        }
      } else {
        previousTouchMove.current = event.touches[0].clientY;
      }
    },
    [scrollWindow]
  );

  const keyPress = useCallback(
    (event: KeyboardEvent) => {
      console.log(event);
      if (event.key === KEY_UP) {
        console.log(event.key);
        scrollWindow("up");
      }
      if (event.key === KEY_DOWN) {
        console.log(event.key);
        scrollWindow("down");
      }
    },
    [scrollWindow]
  );
  useEffect(() => {
    const wrapper = wrapperRef.current;
    console.log(wrapper);
    (wrapper as HTMLElement).addEventListener("touchmove", touchMove);
    (wrapper as HTMLElement).addEventListener("keydown", keyPress);
    return () => {
      (wrapper as HTMLElement).removeEventListener("touchmove", touchMove);
      (wrapper as HTMLElement).removeEventListener("keydown", keyPress);
    };
  }, [touchMove, keyPress]);

  useEffect(() => {
    isMounted.current = true;
    checkRenderOnMount();
    return () => {
      isMounted.current = false;
    };
  }, []);
  // 初始化
  useEffect(() => {
    isScrolling.current = false;
    previousTouchMove.current = null;
    if (pageIndex > prevPageIndex) {
      addNextPage(null);
    }
  }, [addNextPage, pageIndex, prevPageIndex]);

  // 滑动到新页面时调用钩子
  useEffect(() => {
    if (onPageChange) {
      onPageChange(pageIndex);
    }
  }, [onPageChange, pageIndex]);

  useEffect(() => {
    if (customPageIndex && customPageIndex !== null && customPageIndex !== pageIndex) {
      let newPagesToRenderLength = pagesToRenderLength;

      if (customPageIndex !== pageIndex) {
        if (!isEmpty(containers.current[customPageIndex as number]) && !isScrolling.current) {
          isScrolling.current = true;
          scrollPage(customPageIndex as number);

          if (
            isEmpty(containers.current[customPageIndex as number]) &&
            !isEmpty(childrenArr[customPageIndex as number])
          ) {
            newPagesToRenderLength++;
          }

          setTimeout(() => {
            setPageIndex(customPageIndex);
            setPagesToRenderLength(newPagesToRenderLength);
          }, (animationDelay as number) + (animationDuration as number));
        } else if (!isScrolling.current && !isEmpty(childrenArr[customPageIndex])) {
          for (let i = pagesToRenderLength; i <= customPageIndex; i++) {
            newPagesToRenderLength++;
          }

          if (!isEmpty(childrenArr[customPageIndex])) {
            newPagesToRenderLength++;
          }

          isScrolling.current = true;
          isTransitionAfterPageToRenderChanged.current = true;
          setPagesToRenderLength(newPagesToRenderLength);
        }
      }
    }
  }, [customPageIndex, scrollPage]);

  useEffect(() => {
    if (isTransitionAfterPageToRenderChanged.current) {
      isTransitionAfterPageToRenderChanged.current = false;

      scrollPage(customPageIndex || 0);

      setTimeout(() => {
        setPageIndex(customPageIndex || 0);
      }, (animationDuration as number) + (animationDelay as number));
    }
  }, [animationDuration, animationDelay, pagesToRenderLength, customPageIndex, scrollPage]);

  return (
    <main ref={wrapperRef} style={wrapperStyle}>
      <div
        ref={pageRef}
        onWheel={wheelScroll}
        style={{
          height: "100%",
          width: "100%",
          transition: `transform ${animationDuration}ms ${transitionFunction}`,
        }}>
        {setRenderPages()}
      </div>
    </main>
  );
};

FullPage.defaultProps = {
  animationDuration: DEFAULT_ANIMATION_DURATION,
  animationDelay: DEFAULT_ANIMATION_DELAY,
  containerHeight: DEFAULT_CONTAINER_HEIGHT,
  containerWidth: DEFAULT_CONTAINER_WIDTH,
  transitionFunction: DEFAULT_ANIMATION_TRANSITION_FUNCTION,
  disableScrollUp: false,
  disableScrollDown: false,
} as Partial<IFullPageProps>;

export default FullPage;
