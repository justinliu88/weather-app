import React from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";
import WeatherCondition from "./WeatherCondition";
import WeatherForecast from "./WeatherForecast";

const API_KEY = "6e41c655f9339921c7ebd5bad96fd981";

class App extends React.Component {
    state = {
        city: "",
        unit: "metric",
        temperature: undefined,
        weather: undefined,
        windSpeed: undefined,
    };

    getCityValue = (e) => {
        this.setState({
            city: e.target.value,
        });
    };

    getWeather = async (e) => {
        e.preventDefault();
        const city = this.state.city;
        const unit = this.state.unit;
        const api_call = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit}`
        );

        const data = await api_call.json();
        console.log(data);
        if (city) {
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                weather: data.weather[0].main,
                windSpeed: data.wind.speed,
            });

            console.table(
                this.state.temperature,
                this.state.city,
                this.state.weather
            );
        }
    };

    render() {
        return (
            <div className="weather-channel__container">
                <Header />

                <section>
                    <Search
                        getCityValue={this.getCityValue}
                        getWeather={this.getWeather}
                    />{" "}
                </section>

                <section>
                    <WeatherCondition
                        temperature={this.state.temperature}
                        city={this.state.city}
                        weather={this.state.weather}
                        windSpeed={this.state.windSpeed}
                    />{" "}
                    <WeatherForecast />
                </section>

                <Footer />
            </div>
        );
    }
}

export default App;
