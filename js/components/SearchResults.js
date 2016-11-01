import classnames from 'classnames';
import React from 'react';
import SearchResult from './SearchResult';

let SearchResults = React.createClass({

  render() {
    let searchResults = '';

    if (typeof this.props.results.tracks != 'undefined' && typeof this.props.results.tracks.items != 'undefined') {
      searchResults = this.props.results.tracks.items.map(
        track => <SearchResult key={track.id} result={track}/>
      );
    }

    let classes = classnames('SearchResults', 'pure-u-1');

    return (<div className={classes}>{searchResults}</div>);
  }
});

export default SearchResults;