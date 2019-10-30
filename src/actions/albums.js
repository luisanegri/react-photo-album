import superagent from 'superagent';

export const NEW_HELLO_WORLD = 'NEW_HELLO_WORLD';
export const ADD_ALBUM = 'ADD_ALBUM';
export const SET_ALBUMS = 'SET_ALBUMS';

export function helloWorld(firstName, lastName) {
  return {
    type: 'NEW_HELLO_WORLD',
    payload: {
      firstName: firstName,
      lastName: lastName
    }
  };
}

export function addAlbum(id, title) {
  return {
    type: 'ADD_ALBUM',
    payload: {
      id,
      title
    }
  };
}

export function setAlbums(albums) {
  return {
    type: 'SET_ALBUMS',
    payload: albums
  };
}

export function getAlbums() {
  return function(dispatch) {
    superagent('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.body)
      .then(data => {
        dispatch(setAlbums(data));
      });
  };
}

export function createAlbum(title) {
  return function(dispatch) {
    fetch('https://jsonplaceholder.typicode.com/albums', {
      method: 'post',
      body: JSON.stringify({ title })
    })
      .then(res => res.json())
      .then(data => {
        dispatch(addAlbum(data.id, title));
      });
  };
}

// or:

/*
export const createAlbum = title => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/albums", {
    method: "post",
    body: JSON.stringify({ title })
  })
    .then(res => res.json())
    .then(data => {
      dispatch(addAlbum(data.id, title));
    });
}
*/
