import React, { useState, useEffect } from 'react';
import {
  NavLink,
  Outlet,
} from 'react-router-dom';

function HomeLayout() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  // setTime(Date().toLocaleString());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  return (
    <div className="  bg-champagne">
      <header className=" bg-onyx border-b-4  border-green pt-4 pb-4 flex flex-col justify-between items-center h-40 text-champagne">
        <div className="text-2xl">{time}</div>
        <h1 className=" text-5xl ">
          VanMade Dashboard
        </h1>
        <NavLink to="/home" className="hover:underline text-2xl ">Home</NavLink>
      </header>
      <Outlet />
    </div>
  );
}

export default HomeLayout;
