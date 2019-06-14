import React from 'react';
import './VideoItem.css';
const VideoItem = ({video, getSelectedVideo}) => {
  return (
    <div className="video-item item" onClick={() => getSelectedVideo(video)}>
      <img className="ui image" src={video.snippet.thumbnails.medium.url}  alt={video.snippet.title}/>
      <div className="content">
        <a className="header">{video.snippet.title}</a> 
        <div className="description">
          {video.snippet.description}
        </div>
      </div>
    </div>
  )
}

export default VideoItem;