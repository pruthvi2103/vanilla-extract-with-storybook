import React from "react";
import { buttonStyles } from "./Button.styles.css";

const Button = ({ children }) => {
  return <button className={buttonStyles}>{children}</button>;
};

export { Button };
