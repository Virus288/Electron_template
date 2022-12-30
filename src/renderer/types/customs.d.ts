import { IDefaultChildren } from './theme';

export interface IContainerProps extends IDefaultChildren {
  $direction?: string;
  $justify?: string;
  $align?: string;
}

export interface IHeaderProps extends IDefaultChildren {
  $center?: boolean;
}

export interface ISectionProps extends IDefaultChildren {
  $focusWithin?: boolean;
}

export interface INotificationProps extends IDefaultChildren {
  $nth: number;
}
