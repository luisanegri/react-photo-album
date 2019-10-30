const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case 'SET_PHOTOS':
      return [...action.payload];
    // OR ?
    //   return action.payload;
    // case 'GET_ALBUMS':
    //   return action.payload.albums;
    default:
      return state;
  }
};

export default reducer;
