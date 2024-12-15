"use client";
import React, { FC, ReactNode } from "react";

interface ButtonProps {
  clickFunc: () => void;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ clickFunc, children }) => {
  return <button onClick={clickFunc}>{children}</button>;
};

export default Button;
