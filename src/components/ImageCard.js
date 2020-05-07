import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ImageCard extends Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  };

  render() {
    const { description, urls, id } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <Link to={'/' + id}>
          <img ref={this.imageRef} src={urls.regular} alt={description} />
        </Link>
      </div>
    );
  }
}
