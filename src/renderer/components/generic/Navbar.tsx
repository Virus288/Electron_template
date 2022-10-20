import { Link } from 'react-router-dom';
import React from 'react';
import { PayloadAction } from '@reduxjs/toolkit';
import * as hooks from '../../redux';
import * as utils from './utils';
import * as store from '../../redux/hooks';
import * as types from '../../redux/types';

const Navbar: React.FC = () => {
  const dispatch = store.useMainDispatch();

  return (
    <div id="navbar">
      <div id="navToggle">
        <button type="button" onClick={(): void => utils.enableNav()}>
          <i className="icon-left-open-outline navIcon" />
        </button>
      </div>

      <div id="navbarBody">
        <span>
          <span className="navLink">
            <Link to="/" replace>
              <h4>Route</h4>
            </Link>
          </span>

          <span className="navLink">
            <Link to="/images" replace>
              <h4>Route</h4>
            </Link>
          </span>

          <span className="navLink">
            <Link to="/images" replace>
              <h4>Icon</h4>
            </Link>
          </span>

          <span className="navLink">
            <Link to="/images" replace>
              <h4>Icon</h4>
            </Link>
          </span>
        </span>

        <span>
          <span>
            <button
              type="button"
              onClick={(): PayloadAction<types.IPopupAction> =>
                dispatch(hooks.enableSettings())
              }
            >
              <i className="icon-cog-outline navIcon" />
            </button>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
