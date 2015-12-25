import React from 'react';
import SearchResult from './SearchResult';

let SearchResults = React.createClass({

  render() {
    let searchResults = '';

    if (typeof this.props.results.tracks != 'undefined' && typeof this.props.results.tracks.items != 'undefined') {
      searchResults = this.props.results.tracks.items.map(function (track) {
        return (<SearchResult key={track.id} result={track}/>);
      });
    }

    return (<div className="SearchResults">{searchResults}</div>);
  }
});

export default SearchResults;