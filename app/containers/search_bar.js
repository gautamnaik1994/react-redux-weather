import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
        this.onInputChange = this.onInputChange.bind(this);
    }
    
    onInputChange(event) {
       
        console.log(event.target.value);
        this.setState({ term: event.target.value });
    }
    onFormSubmit(event) {
        event.preventDefault();
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

export default SearchBar;