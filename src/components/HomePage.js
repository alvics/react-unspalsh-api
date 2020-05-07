import React, { Component } from 'react';
import unsplash from '../api/Unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

export default class HomePage extends Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get(`/search/photos`, {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div>
        <h1>Pics App</h1>
        <SearchBar userSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}
