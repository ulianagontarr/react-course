import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img src="/logo.jpg" alt="alt_logo" />
    </header>
  );
};

export default Header;
