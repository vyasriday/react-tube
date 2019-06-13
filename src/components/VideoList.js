import React from 'react'
import VideoItem from './VideoItem';

const VideoList = ({videos}) => {
  
  return (
    <div className="ui relaxed divided list">
      {videos.map(video => <VideoItem video={video} key={video.id.videoId}/>)}
    </div>
  )
  
}

export default VideoList;
