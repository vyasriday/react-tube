import React from 'react';
import { connect } from 'react-redux';

import './VideoItem.css';
import { getSelectedVideo } from '../actions';

const VideoItem = ({ video, getSelectedVideo }) => {
  return (
    <div className="video-item item" onClick={() => getSelectedVideo(video)}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <button className="header">{video.snippet.title}</button>
        <div className="description">{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default connect(
  null,
  { getSelectedVideo }
)(VideoItem);
