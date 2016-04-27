import classnames from 'classnames';
import React from 'react';
import SearchForm from './SearchForm';

let Search = React.createClass({

  render() {
    let classes = classnames('Search', 'pure-u-1');

    return (
      <div className={classes}>
        <SearchForm/>
      </div>
    );
  }
});

export default Search;