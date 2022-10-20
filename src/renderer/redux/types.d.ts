import * as enums from '../enums';

export interface PopupState {
  message: string | null;
  targets: {
    [key in enums.EPopupTargets]: boolean;
  };
}

export interface IPopupAction {
  message?: string;
  target: enums.EPopupTargets;
}
