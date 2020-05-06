import React, { Component } from 'react';
import unsplash from '../api/Unsplash';
import SearchBar from './SearchBar';

class App extends Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get(`/search/photos`, {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <h1>Pics App</h1>
        <SearchBar userSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
