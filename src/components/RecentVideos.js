import React from 'react';
import { connect } from 'react-redux';
import VideoItem from './VideoItem';

const styles = {
  display: 'flex',
  overflow: 'scroll'
};

const RecentVideos = ({ videos }) => {
  if (!videos.length) {
    return <h3>Your Recently Viewed Videos Will Appear Here</h3>;
  }
  return (
    <div style={styles}>
      <h2>Recently Played</h2>
      {videos.map(video => (
        <VideoItem
          video={video}
          key={video.id.videoId || video.id.playlistId}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    videos: state.recentVideos
  };
};

export default connect(mapStateToProps)(RecentVideos);
