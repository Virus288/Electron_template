import React from 'react';
import { useMainDispatch } from '../../../redux/hooks';
import * as hooks from '../../../redux';
import * as types from '../../../redux/types';

const Debug: React.FC = () => {
  const dispatch = useMainDispatch();

  return (
    <div id="home">
      <button type="button" className="mainButton">
        Button
      </button>
      <button
        type="button"
        onClick={(): types.IPopupAction =>
          dispatch(
            hooks.enablePopup({
              message: 'Testing popups',
            })
          )
        }
      >
        Toggle popup
      </button>
    </div>
  );
};

export default Debug;
