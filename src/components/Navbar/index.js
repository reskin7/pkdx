import React from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <Link to="/">Asociaciones</Link>

      <div className="navbar-collapse">
        <div>
          <NavLink activeClassName="active" exact to="/marvel">
            Marvel
          </NavLink>

          <NavLink activeClassName="active" exact to="/dc">
            DC
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
