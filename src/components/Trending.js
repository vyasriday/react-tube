import React, { Component } from 'react';
import { getTrendingVideos } from '../actions/index';
import { connect } from 'react-redux';
import styled from 'styled-components';

import VideoItem from './VideoItem';

class Trending extends Component {
  componentDidMount() {
    this.props.getTrendingVideos();
  }

  render() {
    return (
      <VideoListDiv>
        <h2>Trending</h2>
        <hr />
        {this.props.videos.map(video => (
          <VideoItem video={video} key={video.id} />
        ))}
      </VideoListDiv>
    );
  }
}

export const VideoListDiv = styled.div`
  h2 {
    color: steelblue;
    margin-bottom: 0px;
  }
  display: flex;
  flex-direction: column;
  margin: 32px 16px;
  @media (max-width: 700px) {
    margin: 16px 8px;
  }
`;

const mapStateToProps = state => ({
  videos: state.trendingVideos
});

export default connect(
  mapStateToProps,
  { getTrendingVideos }
)(Trending);
