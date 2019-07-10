import React from 'react';
import { connect } from 'react-redux';

const VideoDetail = ({ video }) => {
  if (video === null) {
    return <div />;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} title={video.snippet.title} />
      </div>
      <div className="ui segement">
        <h4 className="ui header">{video.snippet.title}</h4>
        {}
        <p className="description">{video.snippet.description}</p>
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
