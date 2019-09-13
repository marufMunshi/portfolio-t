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
          className="b dib tracked bg-animate white ph3-l pv4-l pa3 hover-bg-white hover-yellow"
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
          className="b dib tracked bg-animate white ph3-l pv4-l pa3  hover-bg-white hover-yellow"
        >
          Works
        </NavLink>
        <a 
          href="https://drive.google.com/open?id=1_X22fMANIMRvASrS5xmDJF3e9Qcv6M5_"
          // eslint-disable-next-line react/jsx-no-target-blank
          target="_blank"
          style={{ textDecoration: 'none' }}
          className="b bg-animate dib hover-bg-white hover-yellow tracked white ph3-l pv4-l pa3 "
        >
          Resume
        </a>
      </div>
    </div>
  </nav>
);