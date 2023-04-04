import React from "react";
import headerLogo from "../images/logo_header.svg";

function Header() {
  return (
    <div>
      <header className="header">
        <img src={headerLogo} alt="логотип" className="header__logo" />
      </header>
    </div>
  );
}

export default Header;
