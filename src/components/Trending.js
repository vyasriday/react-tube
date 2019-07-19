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
      <TrendingDiv>
        {this.props.videos.map(video => (
          <VideoItem video={video} key={video.id} />
        ))}
      </TrendingDiv>
    );
  }
}

const TrendingDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

const mapStateToProps = state => ({
  videos: state.trendingVideos
});

export default connect(
  mapStateToProps,
  { getTrendingVideos }
)(Trending);
