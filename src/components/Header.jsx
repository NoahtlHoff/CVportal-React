// Header.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

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

        <label className="switch">
          {/* If you have a theme toggle, you'd place the <input> here */}
          <span className="slider round"></span>
        </label>
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
              <li>
                <NavLink 
                  to="/portfolio/project1"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  PROJECT 1
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/portfolio/project2"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  PROJECT 2
                </NavLink>
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
                <NavLink 
                  to="/about/cv"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  CV
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about/about-me"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  ABOUT ME
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about/website-doc"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  ABOUT WEBSITE
                </NavLink>
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
