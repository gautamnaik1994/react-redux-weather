import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from 'chart';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp - 273.15);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        console.log(temps);
        return (
            <tr key={name}>
                <td>{name}</td>
                <td><Chart data={temps} color="green" /></td>
                <td><Chart data={pressures} color="red" /></td>
                <td><Chart data={humidities} color="blue"/></td>
            </tr>
        )
    }
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>
                            City
                        </th>
                        <th>
                           Temparature
                        </th>
                        <th>
                            Pressure
                        </th>
                        <th>
                            Humidity
                        </th>
                    </tr>

                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}
function mapStateToProps({weather}) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);