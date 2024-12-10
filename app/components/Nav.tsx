import React from "react";

import Logo from "./Logo";
import Button from "./global/Button";

const Nav = () => {
  return (
    <nav className="nav-container">
      <Logo />
      <div className="search-container">
        <input type="text" placeholder="search items" />
      </div>
      <Button>Sign in</Button>
    </nav>
  );
};

export default Nav;
