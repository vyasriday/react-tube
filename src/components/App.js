import React from 'react';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const App = () => {
  return (
    <div className="ui container">
      <SearchBar />
      <VideoDetail />
      <VideoList />
    </div>
  );
};

export default App;
