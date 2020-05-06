import React from 'react';

export default function ImageList(props) {
  console.log(props);
  const images = props.images.map((image) => {
    return (
      <div key={image.id}>
        <img src={image.urls.regular} alt={image.alt_description} />
      </div>
    );
  });

  return <div>{images}</div>;
}
