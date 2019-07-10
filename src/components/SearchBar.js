import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getVideos } from './../actions';

const SearchBar = ({ getVideos }) => {
  const [searchTerm, updateSearchTerm] = useState('');

  return (
    <div>
      <StyledForm
        onSubmit={event => {
          event.preventDefault();
          getVideos(searchTerm);
        }}
      >
        <input
          type="text"
          value={searchTerm}
          placeholder="Search For Videos"
          onChange={event => updateSearchTerm(event.target.value)}
        />
      </StyledForm>
    </div>
  );
};

const StyledForm = styled.form`
  input {
    width: 80%;
    border: transparent;
    padding: 6px 4px;
    border-width: 2px;
    border-radius: 4px;
    letter-spacing: 1px;
    font-size: 1.2rem;
    outline: none;
    box-shadow: 2px 1px 4px grey;
  }

  @media (max-width: 700px) {
    input {
      width: 88%;
    }
  }
  @media (max-width: 460px) {
    input {
      width: 96%;
    }
  }
`;

export default connect(
  null,
  { getVideos }
)(SearchBar);
