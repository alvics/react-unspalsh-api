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
      <>
        <SearchBar userSubmit={this.onSearchSubmit} />
        <div className="ui container" style={{ margin: '20px  0' }}>
          <ImageList images={this.state.images} />
        </div>
      </>
    );
  }
}
