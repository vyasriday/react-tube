import React from 'react';
import { connect } from 'react-redux';

import './VideoItem.css';
import { getSelectedVideo, addToRecentlyPlayedVideos } from '../actions';

const VideoItem = ({ video, getSelectedVideo, addToRecentlyPlayedVideos }) => {
  return (
    <div
      onClick={() => {
        getSelectedVideo(video);
        addToRecentlyPlayedVideos(video);
      }}
    >
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <h5>{video.snippet.title}</h5>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default connect(
  null,
  { getSelectedVideo, addToRecentlyPlayedVideos }
)(VideoItem);
