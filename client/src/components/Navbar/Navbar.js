import React, { useState } from "react";
import "./Navbar.css";

const navOptions = [
  {
    text: "home",
    selected: false,
  },
  {
    text: "search",
    selected: false,
  },
  {
    text: "reuqest",
    selected: false,
  },
  {
    text: "map",
    selected: false,
  },
];

const Navbar = () => {
  const [navLink, setNavLink] = useState(null);

  return (
    <nav className="navbar">
      <h1>Logo</h1>
      <ul className="navlinks">
        {navOptions.map((items, index) => (
          <a href={`/${items.text}`}>
            <li key={`navitem-${index}`}>{items.text}</li>
          </a>
        ))}
      </ul>
      <div className="profile-section">
        <img src="profile.png" alt="profile" />
        <p>Profile</p>
      </div>
    </nav>
  );
};

export default Navbar;
