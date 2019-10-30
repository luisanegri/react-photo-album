const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case 'ADD_ALBUM':
      return [...state, action.payload];
    case 'SET_ALBUMS':
      return action.payload;
    // case 'GET_ALBUMS':
    //   return action.payload.albums;
    default:
      return state;
  }
};

// export function getAlbums() {
//   return function(dispatch) {
//     fetch('https://jsonplaceholder.typicode.com/albums')
//       .then(res => res.json())
//       .then(data => {
//         dispatch(setAlbums(data));
//       });
//   };
// }

export default reducer;
