interface IFullPageProps {
  // 动画持续时间
  animationDuration?: number;
  // 滚动延迟
  animationDelay?: number;
  // 阻止下滚
  blockScrollDown?: boolean;
  // 阻止上滚
  blockScrollUp?: boolean;
  // 子元素
  children?: React.ReactNode;
  // 容器高度
  containerHeight?: number | string;
  // 容器宽度
  containerWidth?: number | string;
  // 容器编号
  pageNumber?: number;
  // 如果用户尝试滚出组件的时候的回调
  handleScrollUnavailable?: () => void;
  // 滑动进入新页面时的回调
  onBeforePageScroll?: (nextPage: number) => void;
  // 页面改动时的回调
  pageOnChange?: (page: number) => void;
  // 一开始渲染全部页面
  renderAllPagesOnFirstRender?: boolean;
  // 自定义时间函数
  transitionFunction?: string;
}