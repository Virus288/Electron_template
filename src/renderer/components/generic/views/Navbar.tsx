import React from 'react';
import toggleNav from '../utils';
import * as themed from '../themed';
import { NavBody, NavButton, NavContainer, NavIcons } from '../themed';
import * as enums from '../../../enums';
import * as animation from '../../../animation';
import { Link } from '../../customs';

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
      <NavContainer variants={animation.slowSlideRight} initial="init" animate="visible" exit="exit">
        <NavBody>
          <NavIcons>
            <NavButton>
              <Link to="/" replace>
                <h4>Home</h4>
              </Link>
            </NavButton>

            <NavButton>
              <Link to="/route" replace>
                <h4>Route</h4>
              </Link>
            </NavButton>
          </NavIcons>

          <NavIcons>
            <NavButton onClick={(): void => setSettings(true)}>
              <i className="icon-cog-outline navIcon" />
            </NavButton>

            {process.env.NODE_ENV !== 'production' || process.env.DEBUG_PROD === 'true' ? (
              <NavButton>
                <Link to="/debug">
                  <i className="icon-bug navIcon" />
                </Link>
              </NavButton>
            ) : null}
          </NavIcons>
        </NavBody>
      </NavContainer>
    </>
  );
};

export default Navbar;
