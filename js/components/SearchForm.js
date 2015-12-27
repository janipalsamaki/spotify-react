import React from 'react';
import SearchResults from './SearchResults';
import SpotifyWebApi from 'spotify-web-api-js';

let SearchForm = React.createClass({

  getInitialState: function () {
    return {searchString: '', results: []};
  },

  render() {
    return (
      <div className="SearchForm">
        <form onSubmit={this.handleSearch}>
          <input type="text" className="searchString" placeholder="Type in search keywords"
                 value={this.state.searchString}
                 onChange={this.handleChange}/>
          <input type="submit" value="Search"/>
        </form>
        <SearchResults results={this.state.results}/>
      </div>
    )
  },

  handleSearch: function (e) {
    e.preventDefault();
    let spotifyWebApi = new SpotifyWebApi();

    spotifyWebApi.searchTracks(this.state.searchString).then(data => {
      console.log('Tracks:', data);
      this.setState({results: data});
    }, function (error) {
      console.error(error);
    });
  },

  handleChange: function (e) {
    this.setState({searchString: e.target.value});
  }
});

export default SearchForm;