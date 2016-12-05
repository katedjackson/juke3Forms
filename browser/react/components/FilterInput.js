import React from 'react';

const FilterInput = (props) => {
  return (
    <form className="form-group" style={{marginTop: '20px'}}>
      <input
        className="form-control"
        onChange={props.updateInputVal}
        placeholder="Enter artist name"
      />
    </form>
  );
}

export default FilterInput;
