import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header>
        <img className="header__logo" src="./icon/logo.png" alt="logo" />
        <h1 className="header__title">Weather Channel</h1>
      </header>
    );
  }
}

export default Header;
