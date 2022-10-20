export const toggleTheme = (): void => {
  const app = document.querySelector('.app');

  app.classList.toggle('appDark');
  app.classList.toggle('appLight');
};

export const fillTheme = (): void => {
  const app = document.querySelector('.app');
  const toggle = document.querySelector('#themeToggle') as HTMLInputElement;

  if (app.classList.contains('appDark')) {
    toggle.checked = true;
  }
};
