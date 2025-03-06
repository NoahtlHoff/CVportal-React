// Header.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Header() {
  return (
    <header>
      <div className="header-left">
        <div className="logo">
          {/* Replaces index.html with the root path / */}
          <NavLink to="/" className="logo-link">
            NOAH HOFF
          </NavLink>
        </div>

        {/* <label className="switch">
          <span className="slider round"></span>
        </label> */}
      </div>
      
      <nav className="main-nav">
        <ul>
          {/* HOME */}
          <li>
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              HOME
            </NavLink>
          </li>

          {/* PORTFOLIO */}
          <li className="dropdown">
            <NavLink 
              to="/portfolio"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              PORTFOLIO
              <i className="fa-solid fa-chevron-down"></i>
            </NavLink>

            <ul className="dropdown-menu">
            <HashLink smooth to="/portfolio/#featured">
    FEATURED
  </HashLink>
              <li>
              <HashLink smooth to="/portfolio/#other">
    OTHER
  </HashLink>
              </li>
            </ul>
          </li>
          
          {/* ABOUT */}
          <li className="dropdown">
            <NavLink 
              to="/about"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              ABOUT
              <i className="fa-solid fa-chevron-down"></i>
            </NavLink>

            <ul className="dropdown-menu">
            <li>
              <HashLink smooth to="/about/#about-me">
                ABOUT ME
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/about/#cv">
                CV
              </HashLink>
              </li>
            </ul>
          </li>

          {/* CONTACT */}
          <li>
            <NavLink 
              to="/contact"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
