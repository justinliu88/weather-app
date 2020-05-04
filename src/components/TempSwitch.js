import React from "react";

function TempSwitch(props) {
    return (
        <button className="temp-switch">
          <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
          <sup>&deg;</sup>C
        </button>
    )
}

export default TempSwitch;