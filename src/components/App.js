import React, { Component } from 'react';
import youtube_api, {API_KEY} from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends Component {

  state = {
    videos : [],
    selectedVideo: null
  }

  getSearchResults = async (term) => {
    const res = await youtube_api.get('/search', {
      params: {
        key: API_KEY,
        part: 'snippet',
        maxResults: 5,
        q: term,
      }
    });
    this.setState({
      videos: res.data.items,
      selectedVideo: res.data.items[0]
    })
  }

  getSelectedVideo = (video) => {
    this.setState({
      selectedVideo: video
    })
  }

  render() {

    return (
      <div className="ui container">
        <SearchBar  getSearchResults={this.getSearchResults}/>
        <VideoDetail video={this.state.selectedVideo} /> 
        <VideoList videos = {this.state.videos} getSelectedVideo={this.getSelectedVideo}/>
      </div>
    )
  }
}

export default App;