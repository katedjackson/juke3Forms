import React, {Component} from 'react';
import NewPlaylist from '../components/NewPlaylist.js';

export default class PlaylistContainer extends Component {

  constructor() {
    super();
    this.state = {
      inputVal: '',
      disableButton: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
    	inputVal: ''
    })
  }

  handleChange(e) {
  	const value = e.target.value;
  	this.setState({
      inputVal: value,
      disableButton: (value.length===0 || value.length>16)
    });
    
    console.log(this.state.inputVal.length);
  }

  render () {
    
  	return (
      <div>
        <NewPlaylist handleSubmit={this.handleSubmit} handleChange={this.handleChange} inputVal={this.state.inputVal} disableButton={this.state.disableButton}/>
      </div>
    );
  }

}
