import React from 'react';

let SearchResult = React.createClass({

  render() {
    let result = this.props.result;
    let albumName = result.album.name;
    let artists = result.artists.map(function (artist) {
      return artist.name;
    }).join(', ');
    let imageUrl = result.album.images[2].url;
    let trackName = result.name;
    let trackUri = result.uri;

    return (
      <div className="SearchResult">
        <a href={trackUri}>
          <img src={imageUrl} height="64" width="64"/>
          <span className="trackName">{trackName}</span><br/>{albumName}<br/>{artists}
        </a>
      </div>
    );
  }
});

export default SearchResult;