import React from 'react';
import {
  NavLink,
  Outlet,
} from 'react-router-dom';

function HomeLayout() {
  return (
    <div>
      <header>
        <h1>
          VanMade Dashboard
        </h1>
        <NavLink to="/home">Home</NavLink>
      </header>
      <Outlet />
    </div>
  );
}

export default HomeLayout;
