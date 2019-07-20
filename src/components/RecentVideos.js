import React from 'react';
import { connect } from 'react-redux';
import VideoItem from './VideoItem';
import { VideoListDiv } from './Trending';

const RecentVideos = ({ videos }) => {
  if (!videos.length) {
    return <h3>Your Recently Viewed Videos Will Appear Here</h3>;
  }
  return (
    <VideoListDiv>
      <h2>Recently Viewed</h2>
      <hr />
      {videos.map(video => (
        <VideoItem video={video} key={video.id} />
      ))}
    </VideoListDiv>
  );
};

const mapStateToProps = state => {
  return {
    videos: state.recentVideos
  };
};

export default connect(mapStateToProps)(RecentVideos);
