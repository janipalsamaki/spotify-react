import React from 'react';
import SearchForm from './SearchForm';

let Search = React.createClass({

  render() {
    return (
      <div className="Search">
        <h1>Spotify Search (React)</h1>
        <SearchForm/>
      </div>
    );
  }
});

export default Search;