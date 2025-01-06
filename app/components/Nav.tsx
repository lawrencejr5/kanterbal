import React from "react";
import { FaSearch } from "react-icons/fa";

import Logo from "./Logo";
import Button from "./reuse/Button";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="nav-container">
      <Logo />
      {/* <div className="search-container">
        <FaSearch className="icon" />
        <input type="text" placeholder="search items" />
      </div> */}
      <Link href={"/signin"} style={{ textDecoration: "none" }}>
        <button>Sign in</button>
      </Link>
    </nav>
  );
};

export default Nav;
