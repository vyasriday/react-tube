import React, { Component } from 'react';
import youtube_api, {API_KEY} from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';

class App extends Component {

  state = {
    videos : []
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
      videos: res.data.items
    })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar  getSearchResults={this.getSearchResults}/>
        <VideoList videos = {this.state.videos} />
      </div>
    )
  }
}

export default App;