import React from 'react';
import AlbumsList from './AlbumsList';
import AddAlbumForm from './AddAlbumForm';
import { connect } from 'react-redux';
import { getAlbums, createAlbum } from '../actions/albums';

class AlbumsListContainer extends React.Component {
  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/albums')
    //   .then(res => res.json())
    //   .then(data => this.setState({ albums: data }));

    // If we bind action creators using connect, this.props.dispatch is no longer available.
    // this.props.helloWorld('Alice', 'McDog');
    // this.props.addAlbum('5', 'Enjoying the sunshine');

    this.props.getAlbums();
    this.props.createAlbum();
  }

  render() {
    if (!this.props.albums) {
      return <p>Loading...</p>;
    } else {
      return (
        <div>
          <AlbumsList albums={this.props.albums} />
          <AddAlbumForm createAlbum={this.props.createAlbum} />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    albums: state.albums
  };
};

// If we bind action creators using connect,
// this.props.dispatch is no longer available.
export default connect(
  mapStateToProps,
  { getAlbums, createAlbum }
)(AlbumsListContainer);

/* 
First create Action
Second dispatch action inside container component
Third bind action creators
Check on devTools if the action is there
Fourth create the reducer
Fifth check on devtools if the state is updated 
Sixth mapstateto props
Seventh check your presentational page (rendered?)
*/
