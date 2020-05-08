import React from 'react';

import './ImageList.css';
import ImageCard from './ImageCard';

export default function ImageList(props) {
  // console.log('ImageList-Component!!(props)', props);
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="img-wrapper ui segment">{images}</div>;
}
