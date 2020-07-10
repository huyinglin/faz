export type CarouselAnimation = {
  timingFunction: string;
  duration: number;
  delay: number;
}

export type DotStyle = {
  background: string;
  width: string | number;
  height: string | number;
  margin: string | number;
  activeOpacity: number;
  opacity: number;
}

export type DotType = 'line' | 'circle';

export type Dot = {
  type: DotType;
  style: DotStyle;
  renderDot?: React.ReactElement;
}

export interface CarouselProps {
  activeKey: number;
  autoplay: boolean;
  autoplayDuration: number;
  controls: boolean; // 显示上一个下一个箭头
  showDots: boolean; // 显示面板指示点
  animation: Partial<CarouselAnimation>; // 面板过渡动画
  style: React.CSSProperties;
  children: React.ReactNode;
  className: string;

  nextBar: React.ReactElement; // 自定义渲染下一张箭头
  prevBar: React.ReactElement; // 自定义渲染上一张箭头
  dot: Partial<Dot>; // 自定义渲染单个面板指示点

  onChange: (slideKey: React.Key) => void; // activeIndex 变化的回调
}

export interface CarouselItemProps {
  carouselKey?: React.Key;
  carouselItemWidth?: number;
  children?: React.ReactNode;
}

export interface CarouselListProps {
  duration: number;
  carousels: Carousels[];
  changeInfo: ChangeInfo | null;
  carouselKeys: CarouselKeys;
  animation: CarouselAnimation;
  activeKeys: CarouselKey;
}

export interface Carousels extends CarouselItemProps {
  key: React.Key;
  node: React.ReactElement;
}

export type CarouselKey = {
  next: React.Key;
  prev: React.Key;
  head: boolean;
  tail: boolean;
  index: number;
}

export type CarouselKeys = {
  [key: string]: CarouselKey;
}

export interface ChangeInfo {
  direction: 'rtl' | 'ltr'; // rtl: next direction; ltr: prev direction;
  step: number;
  lockAnimation: boolean;
}

export interface CarouselDotsProps {
  onGoto: (key: React.Key) => void;
}

export interface CarouselDotViewProps {
  active: boolean;
  animation: CarouselAnimation;
  dot: Dot;
}
