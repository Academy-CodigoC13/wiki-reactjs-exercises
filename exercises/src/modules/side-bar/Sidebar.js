import React from "react";
import { Link } from "react-router-dom";
import logoSvg from "../../assets/books-logo.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logoSvg} alt="logo" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">API</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
