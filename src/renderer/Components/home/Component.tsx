import React from 'react';

const enableNav = (): void => {
  const nav = document.querySelector('#navbar');
  nav.classList.toggle('navbarActive');
  nav.classList.toggle('navbarInactive');
};

const Home: React.FC = () => {
  return (
    <div>
      <button type="button" onClick={() => enableNav()}>
        Enable navbar
      </button>
    </div>
  );
};

export default Home;
