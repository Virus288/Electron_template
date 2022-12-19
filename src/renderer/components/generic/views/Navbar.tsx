import { Link } from 'react-router-dom';
import React from 'react';
import toggleNav from '../utils';
import * as themed from '../themed/navbar';
import * as enums from '../../../enums';
import * as animation from '../../../animation';

const Navbar: React.FC<{
  setAppActive: React.Dispatch<React.SetStateAction<enums.EActiveAppStates>>;
  appActive: enums.EActiveAppStates;
  setSettings: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setAppActive, appActive, setSettings }) => {
  return (
    <>
      <themed.NavSwitch onClick={(): void => toggleNav(setAppActive, appActive)}>
        <i className="icon-left-open-outline navIcon" />
      </themed.NavSwitch>
      <themed.Navbar variants={animation.slowSlideRight} initial="init" animate="visible" exit="exit">
        <themed.NavBody>
          <themed.NavIcons>
            <themed.NavButton>
              <Link to="/" replace>
                <h4>Route</h4>
              </Link>
            </themed.NavButton>

            <themed.NavButton>
              <Link to="/aa" replace>
                <h4>Route</h4>
              </Link>
            </themed.NavButton>

            <themed.NavButton>
              <Link to="/aa" replace>
                <h4>Icon</h4>
              </Link>
            </themed.NavButton>
          </themed.NavIcons>

          <themed.NavIcons>
            <themed.NavButton onClick={(): void => setSettings(true)}>
              <i className="icon-cog-outline navIcon" />
            </themed.NavButton>

            {process.env.NODE_ENV !== 'production' || process.env.DEBUG_PROD === 'true' ? (
              <themed.NavButton>
                <Link to="/debug">
                  <i className="icon-bug navIcon" />
                </Link>
              </themed.NavButton>
            ) : null}
          </themed.NavIcons>
        </themed.NavBody>
      </themed.Navbar>
    </>
  );
};

export default Navbar;
