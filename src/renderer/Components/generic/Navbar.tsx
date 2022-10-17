import { Link } from 'react-router-dom';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div id="navbar" className="navbarInactive">
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
