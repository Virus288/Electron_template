import { PayloadAction } from '@reduxjs/toolkit';
import React from 'react';
import { useMainDispatch, useMainSelector } from '../../redux/hooks';
import * as hooks from '../../redux';

const Popup: React.FC = () => {
  const { message, enabled } = useMainSelector(hooks.popupState);
  const dispatch = useMainDispatch();

  return enabled ? (
    <div className="popup">
      <h2 className="popupInner">{message}</h2>
      <button
        type="button"
        onClick={(): PayloadAction => dispatch(hooks.disablePopup())}
      >
        Ok
      </button>
    </div>
  ) : null;
};

export default Popup;
