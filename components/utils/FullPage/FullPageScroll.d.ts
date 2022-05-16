interface IFullPageProps {
  // 动画持续时间
  animationDuration?: number;
  // 滚动延迟
  animationDelay?: number;
  // 阻止下滚
  disableScrollDown?: boolean;
  // 阻止上滚
  disableScrollUp?: boolean;
  // 子元素
  children?: React.ReactNode;
  // 容器高度
  containerHeight?: number | string;
  // 容器宽度
  containerWidth?: number | string;
  // 容器编号
  pageNumber?: number;
  // 从外部控制页码
  customPageIndex?: number;
  // 如果用户尝试滚出组件的时候的回调
  scrollUnavailableHandler?: () => void;
  // 滑动进入新页面时的回调
  onBeforePageScroll?: (nextPage: number) => void;
  // 页面改动时的回调
  onPageChange?: (page: number) => void;
  // 一开始渲染全部页面
  renderAllPagesOnMount?: boolean;
  // 自定义时间函数
  transitionFunction?: string;
}
