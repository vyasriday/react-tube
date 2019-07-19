import React from 'react';
import styled from 'styled-components';

import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import RecentVideos from './RecentVideos';
import Header from './Header';
import Sidebar from './Sidebar';

const App = ({ sidebar }) => {
  return (
    <AppWrapper>
      <Header />
      <Sidebar />
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  width: 100%;
  height: auto;
`;

export default App;
