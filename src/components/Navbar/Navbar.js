import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Navbar.module.css';
const setActive = navData => (navData.isActive ? s.active : s.item);

export default function Navbar() {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" className={setActive}>
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" className={setActive}>
          Message
        </NavLink>
      </div>
      <div>
        <NavLink to="/news" className={setActive}>
          News
        </NavLink>
      </div>
      <div>
        <NavLink to="/music" className={setActive}>
          Music
        </NavLink>
      </div>
      <div>
        <NavLink to="/settings" className={setActive}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
}
