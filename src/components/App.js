import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY_TOKEN;

class App extends Component {
  onSearchSubmit(term) {
    axios.get(`https://api.unsplash.com/search/photos`, {
      params: { query: term },
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`
      }
    });
    console.log('here is key:', ACCESS_KEY);
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
