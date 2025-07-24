import React from 'react';
import './Navbar.css';
import deverlogo from "../images/IMG_1656.PNG";
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <section>
      <nav className="navbar">
        <div className="logo">
          <img src={deverlogo} alt="agence digitale" />
        </div>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}