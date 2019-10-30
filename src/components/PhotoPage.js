import React from 'react';

export default function PhotoPage(props) {
  return (
    <div>
      <h1>Photos in this album</h1>
      {props.photos.map(photo => (
        <img src={photo.thumbnailUrl} alt="album-phto"></img>
      ))}
    </div>
  );
}
