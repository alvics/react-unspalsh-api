import React, { Component } from 'react';
import axios from 'axios';

const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY_TOKEN;

export default class ImageSingle extends Component {
  state = {
    image: '',
    preview_photos: ''
  };

  componentDidMount() {
    console.log('props!!', this.props);
    let id = this.props.match.params.id;

    axios
      .get(`https://api.unsplash.com/photos/${id}`, {
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`
        }
      })
      .then((res) => {
        this.setState({
          image: res.data
        });
        console.log('SingleImage-Stuff!!', res.data);
        // console.log('image!!', res.data.urls.full);
      });
    this.setState({
      id: id
    });
  }

  render() {
    const singleImage = this.state.image ? (
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
            style={{ borderRadius: '6px' }}
            src={this.state.image.urls.regular}
            alt={this.state.image.alt_description}
          />
        </div>

        <br />
        <small>Total downloads: {this.state.image.downloads}</small>
        <h4>More</h4>

        {this.state.image.related_collections.results.map((img) => {
          return (
            <div>
              <div key={img.id} style={{ display: 'inline-flex' }}>
                <img src={img} alt={img.title} />
              </div>
              {img.total_photos}
            </div>
          );
        })}
      </div>
    ) : (
      <div>
        <h3>Loading...</h3>
      </div>
    );

    return <>{singleImage}</>;
  }
}
