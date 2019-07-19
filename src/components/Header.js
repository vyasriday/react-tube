import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import SearchBar from './SearchBar';
import { toggleSidebar } from '../actions';

const Header = ({ toggleSidebar, toggle }) => {
  return (
    <HeaderDiv>
      <div className="hamburger" onClick={() => toggleSidebar()}>
        {toggle ? (
          <i className="fas fa-times" />
        ) : (
          <i className="fas fa-bars" />
        )}
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
  .hamburger {
    width: 44px;
    margin-left: 4px;
    cursor: pointer;
    margin-right: 24px;
  }
  .hamburger > i {
    font-size: 24px;
    color: steelblue;
    margin-left: 16px;
  }
  .search-bar {
    min-width: calc(100vw - 100px);
  }
`;

const mapStateToProps = state => ({ toggle: state.sidebarToggle });
export default connect(
  mapStateToProps,
  { toggleSidebar }
)(Header);
