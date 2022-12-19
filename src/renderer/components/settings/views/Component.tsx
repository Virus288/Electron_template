import React from 'react';
import { DefaultTheme, useTheme } from 'styled-components';
import * as animation from '../../../animation';
import changeTheme from '../utils';
import { ExitButton, FullPageContainer } from '../../../customs';

const Settings: React.FC<{
  disableSettings: () => void;
  setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
}> = ({ disableSettings, setTheme }) => {
  const theme = useTheme();

  return (
    <FullPageContainer variants={animation.slideRight} initial="init" animate="visible" exit="exit">
      <ExitButton onClick={(): void => disableSettings()}>
        <i className="icon-left-open-outline navIcon" />
      </ExitButton>
      <div id="settingsBody">
        <header>Settings</header>
        <div>
          <span>
            Theme
            <input id="themeToggle" type="checkbox" onChange={(): void => changeTheme(setTheme, theme)} />
          </span>
        </div>
      </div>
    </FullPageContainer>
  );
};

export default Settings;
