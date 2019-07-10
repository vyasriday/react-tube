import React from 'react';
import styled from 'styled-components';

import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import RecentVideos from './RecentVideos';
import Header from './Header';

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <VideoDetail />
      <VideoList />
      <RecentVideos />
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  width: 100%;
  height: auto;
`;

export default App;
