import React from "react";
import axios from "axios";

import { format } from "date-fns";

import ForecastRow from "./ForecastRow";
const API_KEY = "6e41c655f9339921c7ebd5bad96fd981";
class WeatherForecast extends React.Component {
    state = {
        forecasts: [],
        forecastBuffer: [],
        btnFiveClass: ["forecast__switch_0"],
        btnTenClass: ["forecast__switch_1"],
    };

    componentDidMount() {
        axios(
            //"https://jr-weather-api.herokuapp.com/api/weather?cc=au&city=brisbane"

            `https://api.openweathermap.org/data/2.5/forecast?q=brisbane&appid=${API_KEY}&units=${this.props.unit}`
        ).then((res) => {
            console.log(res);
            //const data = res.data.data.forecast.slice(0, 10);
            const data = res.data.list.slice(0, 10);
            this.setState({ forecastBuffer: data });
            this.setState({ forecasts: this.state.forecastBuffer.slice(0, 0) });
        });
    }

    showFiveRows = () => {
        const fiveRow = this.state.forecastBuffer.slice(0, 5);
        this.setState({ forecasts: fiveRow });
        if (!this.state.btnFiveClass.includes("switch-active")) {
            this.setState({
                btnFiveClass: this.state.btnFiveClass.push("switch-active"),
                btnFiveClass: this.state.btnFiveClass.join(" "),
            });
        }
        if (this.state.btnTenClass.includes("switch-active")) {
            this.setState({
                btnTenClass: ["forecast__switch_1"],
            });
        }
    };

    showTenRows = () => {
        this.setState({ forecasts: this.state.forecastBuffer });
        //console.log(this.state.forecasts);
        if (this.state.btnFiveClass.includes("switch-active")) {
            this.setState({
                btnFiveClass: ["forecast__switch_0"],
            });
        }
        if (!this.state.btnTenClass.includes("switch-active")) {
            this.setState({
                btnTenClass: this.state.btnTenClass.push("switch-active"),
                btnTenClass: this.state.btnTenClass.join(" "),
            });
        }
    };

    render() {
        return (
            <section className="weather-forecast">
                <div className="forecast__switch">
                    <button
                        className={this.state.btnFiveClass}
                        onClick={this.showFiveRows}
                    >
                        5 items
                    </button>
                    <button
                        className={this.state.btnTenClass}
                        onClick={this.showTenRows}
                    >
                        10 items
                    </button>
                </div>
                {this.state.forecasts.map((forecast) => {
                    const date = new Date(forecast.dt * 1000);
                    const day = format(date, "EEE");
                    const time = format(date, "HH:mm");

                    return (
                        <ForecastRow
                            key={date}
                            day={day}
                            high={forecast.main.temp_max}
                            low={forecast.main.temp_min}
                            time={time}
                        />
                    );
                })}
            </section>
        );
    }
}

export default WeatherForecast;
