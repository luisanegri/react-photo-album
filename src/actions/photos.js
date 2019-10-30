import superagent from 'superagent';
export const SET_PHOTOS = 'SET_PHOTOS';

export function setPhotos(photos) {
  return {
    type: 'SET_PHOTOS',
    payload: photos
  };
}

// action creator - the helper is inside componentDidMount in the container
export function getPhotosByAlbum(albumId) {
  return function(dispatch) {
    superagent(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then(response => response.body)
      .then(data => {
        dispatch(setPhotos(data));
      });
  };
}
