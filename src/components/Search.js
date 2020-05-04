import React from "react";
import TempSwitch from "./TempSwitch";

class Search extends React.Component {
    render() {
        return (
            <nav>
                <div>
                    <input
                        className="search-input"
                        type="text"
                        onChange={this.props.getCityValue}
                    />
                </div>
                <button className="search-btn" onClick={this.props.getWeather}>
                    <i className="fa fa-search"></i>
                </button>
                <TempSwitch />
            </nav>
        );
    }
}

export default Search;
