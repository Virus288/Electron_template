import { Link } from 'react-router-dom';
import React from 'react';

const enableNav = (): void => {
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

const Navbar: React.FC = () => {
  return (
    <div id="navbar">
      <div id="navToggle">
        <button type="button" onClick={(): void => enableNav()}>
          <i className="icon-left-open-outline" />
        </button>
      </div>

      <span>
        <span className="navIcon">
          <Link to="/" replace>
            <h4>Route</h4>
          </Link>
        </span>

        <span className="navIcon">
          <Link to="/images" replace>
            <h4>Route</h4>
          </Link>
        </span>
      </span>

      <span>
        <span className="navIcon">
          <Link to="/images" replace>
            <h4>Icon</h4>
          </Link>
        </span>

        <span className="navIcon">
          <Link to="/images" replace>
            <h4>Icon</h4>
          </Link>
        </span>
      </span>
    </div>
  );
};

export default Navbar;
