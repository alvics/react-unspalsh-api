import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = {
    term: ''
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.userSubmit(this.state.term);
  };

  render() {
    return (
      <div id="hero" className="ui segment">
        <form id="hero-form" onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <div id="hero-text">
              <h1>Pics App</h1>
              <p>Image Search Application</p>
            </div>

            <input
              placeholder="Search..."
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
