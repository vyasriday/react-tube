import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <HeaderDiv>
      <div className="hamburger">
        <i className="fas fa-bars" />
      </div>
      <div className="search-bar">
        <SearchBar />
      </div>
    </HeaderDiv>
  );
};

const HeaderDiv = styled.div`
  display: flex;
  height: 48px;
  align-items: center;
  box-shadow: 0px 1px 2px grey;
  margin-bottom: 1rem;
  .hamburger {
    min-width: 44px;
    margin-left: 4px;
    font-size: 24px;
    color: steelblue;
    cursor: pointer;
  }
  .search-bar {
    min-width: calc(100vw - 50px);
  }
`;

export default Header;
