import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import './navbar.css';
import 'animate.css';
import { navigation } from '../../utils/navigation';

export const Navbar = () => {
  return (
    <div className="navbar animate__animfated animate__adeIn">
      {navigation.map((item) => (
        <div className="cursor" key={item.name}>
          <NavLink exact to={item.path}>
            <h1>{item.name}</h1>
          </NavLink>
        </div>
      ))}
    </div>
  );
};
