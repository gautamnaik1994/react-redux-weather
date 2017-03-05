import React, { Component } from 'react';
import '../styles/app.scss';

import SearchBar from 'search_bar';
class App extends Component {
    render() {
        return (
            <div className="container">
                <SearchBar/>
            </div>
        );
    }
}

export default App;