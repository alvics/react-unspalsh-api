import React, { Component } from 'react';

import axios from 'axios';

const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY_TOKEN;

export default class ImageSingle extends Component {
  state = {
    image: '',
    preview_photos: [],
    urls: {}
  };

  componentDidMount() {
    // console.log('props!!', this.props);
    let id = this.props.match.params.id;

    axios
      .get(`https://api.unsplash.com/photos/${id}`, {
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`
        }
      })
      .then((res) => {
        this.setState({
          image: res.data,
          images: res.data.related_collections.results
        });
        // console.log('SingleImage-Stuff!!', res.data);
      });
    this.setState({
      id: id
    });
  }

  render() {
    const img = this.state.image;
    const singleImage = img ? (
      <div className="ui segment">
        <h1>{this.state.image.alt_description}</h1>
        <div
          style={{
            margin: '0 auto',
            border: '1px solid #eee',
            padding: '1em 0.5em',
            borderRadius: '6px'
          }}
        >
          <img
            className="ui fluid image"
            style={{ borderRadius: '6px' }}
            src={img.urls.regular}
            alt={img.alt_description}
          />
        </div>

        <br />
        <small>Total downloads: {img.downloads} </small>
        <small style={{ float: 'right', paddingRight: '20px' }}>
          <i className=" red heart icon" style={{ paddingRight: '-5px' }}>
            <span style={{ paddingRight: '3px' }}></span>
            {img.likes}
          </i>
        </small>
        <p>{img.description}</p>
        <h4>Photographer: </h4>
        <div style={{ display: 'flex' }}>
          <p>{img.user.name}</p>
        </div>
      </div>
    ) : (
      <div>
        <h3>Loading...</h3>
      </div>
    );

    return (
      <div className="ui container" style={{ margin: '20px  0' }}>
        {singleImage}
      </div>
    );
  }
}
