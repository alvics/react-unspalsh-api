import React from 'react';
import '../components/ImageList.css';
import ImageCard from './ImageCard';

export default function ImageList(props) {
  // console.log(props);
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="img-wrapper ui segment">{images}</div>;
}
