import React, {Component} from 'react';
import Songs from './Songs';

export default class Playlist extends Component {
  
  componentDidMount () {
    console.log("hi");
    const playlistId = this.props.routeParams.playlistId;
    const selectPlaylist = this.props.selectPlaylist;


    selectPlaylist(playlistId);
  }


  render(){
    const playlist = this.props.selectedPlaylist;
    console.log("props", this.props, "playlist", playlist);
    return (
      <div>
        <h3>{ playlist.name }</h3>
        <Songs songs={playlist.songs} /> {/** Hooray for reusability! */}
        { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
        <hr />
      </div>
    );

    }
}

