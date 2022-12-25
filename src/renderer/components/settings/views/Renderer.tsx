import React, { useState } from 'react';
import { DefaultTheme } from 'styled-components';
import * as enums from '../../../enums';
import * as themed from '../themed';
import { Checkbox } from '../../customs';
import changeTheme from '../utils';

// eslint-disable-next-line import/prefer-default-export
export const Theme: React.FC<{
  setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
  theme: DefaultTheme;
}> = ({ setTheme, theme }) => {
  const [value, setValue] = useState<boolean>(theme.themeState === enums.EThemes.Dark);

  return (
    <themed.Section>
      <h2>Dark mode</h2>
      <Checkbox
        type="checkbox"
        checked={value}
        onChange={(): void => {
          setValue(!value);
          changeTheme(setTheme, theme);
        }}
      />
    </themed.Section>
  );
};
