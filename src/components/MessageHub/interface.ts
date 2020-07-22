export interface MessageHubProps {
  /** 最大消息数 */
  maxCount?: number;

  /** 弹出框层级 */
  zIndex?: number;

  /** 弹出位置 */
  placement?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

  /** 弹出位置距离文档的位置 */
  position?: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  }
}

export interface MessageHubState {
  queue: MessageProps[];
}

export interface MessageProps {
  key?: React.Key;
  style?: React.CSSProperties;
  className?: string;
  duration?: number | null;
  content?: React.ReactNode;
  closeIcon?: React.ReactNode;
  closable?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onClose?: () => void;
}
