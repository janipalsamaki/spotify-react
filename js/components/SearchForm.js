import classnames from 'classnames';
import React from 'react';
import SearchResults from './SearchResults';
import SpotifyWebApi from 'spotify-web-api-js';

let SearchForm = React.createClass({

  getInitialState: function () {
    return {searchString: '', results: []};
  },

  render() {
    let formClasses = classnames('pure-form');
    let searchStringClasses = classnames('searchString', 'pure-input-2-3', 'pure-input-rounded');
    let buttonClasses = classnames('pure-button');

    return (
      <div className="SearchForm">
        <form onSubmit={this.handleSearch} className={formClasses}>
          <input type="text" className={searchStringClasses} placeholder="Spotify track search"
                 value={this.state.searchString}
                 onChange={this.handleChange}/>
          <input type="submit" value="Search" className={buttonClasses}/>
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