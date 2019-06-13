import React, { Component } from 'react'

class SearchBar extends Component {

  state = {
    searchTerm: ''
  }

  onInputChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.getSearchResults(this.state.searchTerm);
  } 

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <input 
            className="field"
            type="text" 
            value={this.state.searchTerm} 
            placeholder="Search For Videos" 
            onChange={this.onInputChange}
          />
        </form>        
      </div>
    )
  }
}

export default SearchBar;

