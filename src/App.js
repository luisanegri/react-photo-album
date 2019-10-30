import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import AlbumsListContainer from './components/AlbumsListContainer';
import PhotoPageContainer from './components/PhotoPageContainer';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={AlbumsListContainer} />
      <Route exact path="/albums/:id" component={PhotoPageContainer} />
    </div>
  );
}

export default App;
