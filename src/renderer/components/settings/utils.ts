export const toggleTheme = (): void => {
  const app = document.querySelector('#app');
  if (!app) return;

  app.classList.toggle('appDark');
  app.classList.toggle('appLight');
};

export const fillTheme = (): void => {
  const app = document.querySelector('#app');
  const toggle: HTMLInputElement | null = document.querySelector('#themeToggle');

  if (toggle && app?.classList.contains('appDark')) {
    toggle.checked = true;
  }
};
