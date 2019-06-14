import React from 'react'

const VideoDetail = ({video}) =>  {

  if (video === null) {
    return <h3>Search For Videos !!!</h3>
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} title={video.snippet.title} ></iframe>
      </div>
      <div className="ui segement">
        <h4 className="ui header">{video.snippet.title}</h4>{}
        <p className="description">{video.snippet.description}</p>
      </div>
    </div>
  )
}

export default VideoDetail;