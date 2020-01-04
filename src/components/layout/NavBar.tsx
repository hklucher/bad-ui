import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css"

function NavBar() {
  return (
    <nav className="nav-bar">
      <ul className="nav-bar__list">
        <li className="nav-bar__list-item">
          <Link to="/">Home</Link>
        </li>

        <li className="nav-bar__list-item">
          <Link to="/shuffle_phone">
            Shuffle Phone
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;
