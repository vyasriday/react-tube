import React from 'react';
import { connect } from 'react-redux';

const VideoDetail = ({ video }) => {
  if (video == null) {
    return <div />;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div>
        <iframe src={videoSrc} title={video.snippet.title} />
      </div>
      <div>
        <h4>{video.snippet.title}</h4>
        {}
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    video: state.selectedVideo
  };
};

export default connect(mapStateToProps)(VideoDetail);
