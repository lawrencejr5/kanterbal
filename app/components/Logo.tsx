import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} className="logo">
      <img className="logo-img" src="/images/logos/logo-main.png" alt="" />
    </Link>
  );
};

export default Logo;
