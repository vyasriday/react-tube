import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Header from './Header';
import Sidebar from './Sidebar';
import Trending from './Trending';
import { getLocation } from '../actions';
import SavedVideos from './SavedVideos';
import RecentVideos from './RecentVideos';

const App = ({ getLocation }) => {
  return (
    <Router>
      <AppWrapper>
        <Header />
        <Sidebar />
        <VideoDetail />
        <Route path="/saved" component={VideoList} />
        <Route path="/:q" component={VideoList} />
        <Route path="/history" component={RecentVideos} />
        <Route path="/" exact component={Trending} />
      </AppWrapper>
    </Router>
  );
};

const AppWrapper = styled.div`
  width: 100%;
  height: auto;
`;

export default connect(
  null,
  { getLocation }
)(App);
