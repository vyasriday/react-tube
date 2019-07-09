import React, { useState } from 'react';
import { connect } from 'react-redux';

import { getVideos } from './../actions';

const SearchBar = ({ getVideos }) => {
  const [searchTerm, updateSearchTerm] = useState('');

  return (
    <div className="search-bar ui segment">
      <form
        className="ui form"
        onSubmit={event => {
          event.preventDefault();
          getVideos(searchTerm);
        }}
      >
        <input
          className="field"
          type="text"
          value={searchTerm}
          placeholder="Search For Videos"
          onChange={event => updateSearchTerm(event.target.value)}
        />
      </form>
    </div>
  );
};

export default connect(
  null,
  { getVideos }
)(SearchBar);
