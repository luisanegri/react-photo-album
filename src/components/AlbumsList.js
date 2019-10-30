import React from 'react';
import { Link } from 'react-router-dom';

export default function AlbumsList(props) {
  console.log('props', props);
  return (
    <div>
      <h1>All Albums</h1>
      <p>There are {props.albums.length} albums available.</p>
      <ul>
        {props.albums.map(album => (
          <li>
            <Link to={`/albums/${album.id}`} key={album.id}>
              {album.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
