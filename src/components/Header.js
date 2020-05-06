import React from "react";
import Img from "../icon/logo.png";

class Header extends React.Component {
    render() {
        return (
            <header>
                <img className="header__logo" src={Img} alt="logo" />
                <h1 className="header__title">Weather Channel</h1>
            </header>
        );
    }
}

export default Header;
