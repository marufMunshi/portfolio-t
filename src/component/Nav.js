import React from 'react';
import { NavLink } from "react-router-dom";

export const Nav = (props) => (
  <nav 
    className={props.className ? `${props.className} w-100 f5-l f6` : 'w-100 bg-black f5-l f6'}
  >
    <div className="flex items-center justify-between">
      <div>
        <NavLink
          to="/"
          exact={true}
          style={{ textDecoration: 'none' }}
          activeClassName="bg-white red"
          className="b dib tracked bg-animate white ph3 pv4 hover-bg-white hover-yellow"
        >
          Home
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/works"
          exact={true}
          style={{ textDecoration: 'none' }}
          activeClassName="bg-white red"
          className="b dib tracked bg-animate white ph3 pv4 hover-bg-white hover-yellow"
        >
          Works
        </NavLink>
        <NavLink
          to="/about/"
          style={{ textDecoration: 'none' }}
          activeClassName="bg-white red"
          className="b bg-animate dib hover-bg-white hover-yellow tracked white ph3 pv4"
        >
          About
        </NavLink>
      </div>
    </div>
  </nav>
);