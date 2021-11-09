import React from "react";

import { Wrapper } from "./NavbarStyle";

function focus({ target }) {
  document.querySelector(target.id).scrollIntoView();
}

const Navbar = () => {
  return (
    <>
      <Wrapper className="projects">
        <div className="logo">
          <span className="header">Suprada</span>
        </div>

        <input type="checkbox" className="menu-btn" id="menu-btn" />
        <label htmlFor="menu-btn" className="menu-icon">
          <span className="menu-icon__line"></span>
        </label>

        <ul className="nav-links">
          <li onClick={focus} id="#home" tar="home" className="nav-link">
            Home
          </li>
          <li onClick={focus} id="#about-me" className="nav-link">
            About
          </li>
          <li onClick={focus} id="#skill" className="nav-link">
            Skills
          </li>
          <li onClick={focus} id="#project" className="nav-link">
            Projects
          </li>
          <li onClick={focus} id="#contact" className="nav-link">
            Contact
          </li>
        </ul>
      </Wrapper>
    </>
  );
};

export default Navbar;
