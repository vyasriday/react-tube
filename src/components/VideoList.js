import React from 'react';
import { connect } from 'react-redux';

import { VideoListDiv } from './Trending';
import VideoItem from './VideoItem';

const VideoList = ({ videos, getSelectedVideo }) => {
  return (
    <VideoListDiv>
      {videos.map(video => (
        <VideoItem
          video={video}
          key={video.id.videoId || video.id.playlistId}
        />
      ))}
    </VideoListDiv>
  );
};

const mapStateToProps = state => {
  return {
    videos: state.videos
  };
};

export default connect(mapStateToProps)(VideoList);
