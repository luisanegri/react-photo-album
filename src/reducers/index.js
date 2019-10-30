import { combineReducers } from 'redux';
import albumsReducer from './albumsReducer';
import photosReducer from './photosReducer';

export default combineReducers({
  albums: albumsReducer,
  photos: photosReducer
});
