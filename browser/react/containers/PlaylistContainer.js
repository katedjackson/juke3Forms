import React, {Component} from 'react';
import axios from 'axios';
import NewPlaylist from '../components/NewPlaylist.js';

export default class PlaylistContainer extends Component {

  constructor() {
    super();
    this.state = {
      inputVal: '',
      disableButton: true,
      showWarning: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addPlaylist = this.addPlaylist.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.addPlaylist(this.state.inputVal);
    this.setState({
    	inputVal: ''
    })
  }

  handleChange(e) {
  	const value = e.target.value;
  	this.setState({
      inputVal: value,
      disableButton: (value.length===0 || value.length>16),
      showWarning: (value.length===0 || value.length>16)
    });
  }

  addPlaylist(playlistName) {
    axios.post('/api/playlists', {
      name: playlistName
    })
    .then(res => res.data)
    .then(result => {
      console.log(result)
    });
  }


  render () {
  	return (
      <div>
        <NewPlaylist handleSubmit={this.handleSubmit} handleChange={this.handleChange} inputVal={this.state.inputVal} disableButton={this.state.disableButton} />
        {this.state.showWarning ? <div className="alert alert-warning">Please enter a name</div> : null}
      </div>
    );
  }

}
