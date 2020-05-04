import React from "react";

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
                                <img src="icon/icon-umberella.png" alt="umb" />
                                <span className="citem">20%</span>
                            </div>
                            <div>
                                <img src="icon/icon-wind.png" alt="wind" />{" "}
                                <span className="citem">{`${this.props.windSpeed} km/h`}</span>
                            </div>
                            <div>
                                <img
                                    src="icon/icon-compass.png"
                                    alt="compass"
                                />{" "}
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
