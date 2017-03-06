import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    
    onInputChange(event) {
        console.log(event.target.value);
        this.setState({ term: event.target.value });
    }
    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term:''});
    }

    render() {
        return (
            <form className="input-group" onSubmit={this.onFormSubmit}>
                <input className="form-control" placeholder="Get forcast" value={this.state.term} onChange={this.onInputChange}/>       
                <span className="input-group-btn">
                    <buttton type="submit" className="btn btn-default">Submit</buttton>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);