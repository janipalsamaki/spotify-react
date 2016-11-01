import classnames from 'classnames';
import React from 'react';
import SearchResults from './SearchResults';
import SpotifyWebApi from 'spotify-web-api-js';

let SearchForm = React.createClass({

  getDefaultProps() {
    return {spotifyWebApi: new SpotifyWebApi()};
  },

  getInitialState() {
    return {searchString: '', results: []};
  },

  render() {
    let formClasses = classnames('pure-form');
    let searchIconClasses = classnames('fa', 'fa-search');
    let searchStringClasses = classnames('searchString', 'pure-input-2-3', 'pure-input-rounded');
    let buttonClasses = classnames('pure-button');

    return (
      <div className="SearchForm">
        <form onSubmit={this.handleSearch} className={formClasses}>
          <i className={searchIconClasses}/>
          <input type="text" className={searchStringClasses} placeholder="Spotify track search"
                 value={this.state.searchString}
                 onChange={this.handleChange}/>
          <input type="submit" value="Search" className={buttonClasses}/>
        </form>
        <SearchResults results={this.state.results}/>
      </div>
    )
  },

  handleSearch(e) {
    e.preventDefault();

    this.props.spotifyWebApi.searchTracks(this.state.searchString).then(data => {
      console.log('Tracks:', data);
      this.setState({results: data});
    }, error => {
      console.error(error);
    });
  },

  handleChange(e) {
    this.setState({searchString: e.target.value});
  }
});

export default SearchForm;