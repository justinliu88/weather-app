import React from "react";
import Umb from "../icon/icon-umberella.png";
import Wind from "../icon/icon-wind.png";
import Compass from "../icon/icon-compass.png";

class WeatherCondition extends React.Component {
    render() {
        return (
            <section className="weather-condition">
                {typeof this.props.weather !== "undefined" &&
                this.props.city !== "" ? (
                    <div>
                        <div className="weather-condition__location">
                            {this.props.city}
                        </div>
                        <div className="weather-condition__visibility">
                            {this.props.weather}
                        </div>
                        <div className="weather-condition__temp">
                            {`${Math.round(this.props.temperature)} c`}
                        </div>
                        <div className="weather-condition__desc">
                            <div>
                                <img src={Umb} alt="umb" />
                                <span className="citem">
                                    {" "}
                                    {`${Math.round(this.props.humidity)} %`}
                                </span>
                            </div>
                            <div>
                                <img src={Wind} alt="wind" />{" "}
                                <span className="citem">{`${this.props.windSpeed} km/h`}</span>
                            </div>
                            <div>
                                <img src={Compass} alt="compass" />{" "}
                                <span className="citem">NE</span>
                            </div>
                        </div>
                    </div>
                ) : (
                    ""
                )}
            </section>
        );
    }
}

export default WeatherCondition;
