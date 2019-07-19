import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import RecentVideos from './RecentVideos';
import Header from './Header';
import Sidebar from './Sidebar';
import Trending from './Trending';

const App = ({ sidebar }) => {
  return (
    <AppWrapper>
      <Header />
      <Sidebar />
      <VideoDetail />
      <Router>
        <Switch>
          <Route path="/" exact component={Trending} />
        </Switch>
      </Router>
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  width: 100%;
  height: auto;
`;

export default App;
