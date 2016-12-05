import React, {Component} from 'react';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';

export default class FilterableArtistsContainer extends Component {

  constructor() {
    super();
    this.state = {
      currentInputVal: ''
    };
    this.updateInputVal = this.updateInputVal.bind(this);
  }

  updateInputVal(e) {
    const value = e.target.value;
      this.setState({
        currentInputVal: value
      });
  }

  render () {
    const inputVal = this.state.currentInputVal;
    const filteredArtists = this.props.artists.filter(artist => artist.name.match(inputVal));

    return (
      <div>
        <FilterInput updateInputVal={this.updateInputVal}/>
        <Artists artists={filteredArtists}/>
      </div>
    );
  }

}
