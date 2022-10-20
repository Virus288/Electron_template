export const enableNav = (): void => {
  const app = document.querySelector('.app');

  if (app.classList.contains('appInactive')) {
    app.classList.toggle('appInactive');
    app.classList.toggle('appFull');
  } else if (app.classList.contains('appActive')) {
    app.classList.toggle('appActive');
    app.classList.toggle('appInactive');
  } else {
    app.classList.toggle('appFull');
    app.classList.toggle('appActive');
  }
};
