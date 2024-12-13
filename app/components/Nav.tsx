import React from "react";
import { FaSearch } from "react-icons/fa";

import Logo from "./Logo";
import Button from "./reuse/Button";

const Nav = () => {
  return (
    <nav className="nav-container">
      <Logo />
      <div className="search-container">
        <FaSearch className="icon" />
        <input type="text" placeholder="search items" />
      </div>
      <Button>Sign in</Button>
    </nav>
  );
};

export default Nav;
