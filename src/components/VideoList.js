import React from 'react'
import VideoItem from './VideoItem';

const VideoList = ({videos, getSelectedVideo}) => {
  
  return (
    <div className="ui relaxed divided list">
      {videos.map(video => (
          <VideoItem 
            video={video} 
            key={video.id.videoId} 
            getSelectedVideo={getSelectedVideo}
          />
        )
      )}
    </div>
  )
  
}

export default VideoList;
