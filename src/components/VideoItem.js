import React from 'react';
import './VideoItem.css';
const VideoItem = ({video}) => {
  return (
    <div className="video-item item">
      <img className="ui image" src={video.snippet.thumbnails.medium.url}  alt={video.snippet.title}/>
      <div className="content">
        <a className="header">{video.snippet.title}</a> 
        <div classNmae="description">
          {video.snippet.description}
        </div>
      </div>
    </div>
  )
}

export default VideoItem;