import React, { Component } from 'react';
import SearchBar from './SearchBar';

class App extends Component {
  onSearchSubmit(term) {
    console.log(term);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <h1>Pics App</h1>
        <SearchBar userSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
