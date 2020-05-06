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
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
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
