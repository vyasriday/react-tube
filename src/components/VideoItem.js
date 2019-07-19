import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getSelectedVideo, addToRecentlyPlayedVideos } from '../actions';

const VideoItem = ({ video, getSelectedVideo, addToRecentlyPlayedVideos }) => {
  return (
    <VideoDiv
      onClick={() => {
        getSelectedVideo(video);
        addToRecentlyPlayedVideos(video);
      }}
    >
      <div className="thumbnail">
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
      </div>
      <div className="content">
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description.substring(0, 200)}...</p>
      </div>
    </VideoDiv>
  );
};

const VideoDiv = styled.div`
  display: flex;
  margin: 16px 0px;
  box-shadow: 2px 2px 6px gray;
  border-radius: 4px;
  .thumbnail {
    display: flex;
    align-items: center;
    margin-right: 10px;
    border-radius: 4px;

    img {
      box-shadow: 2px 2px 2px #9e9e9e;
    }
  }
  .content {
    h4 {
      color: #065696;
    }
  }
  @media (max-width: 650px) {
    .content {
      p {
        font-size: 16px;
      }
    }
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export default connect(
  null,
  { getSelectedVideo, addToRecentlyPlayedVideos }
)(VideoItem);
