import React, { Component } from 'react';
import '../styles/app.scss';

import SearchBar from 'search_bar';
import WeatherList from 'weather_list';
class App extends Component {
    render() {
        return (
            <div className="container">
                <SearchBar />
                <WeatherList/>
            </div>
        );
    }
}

export default App;