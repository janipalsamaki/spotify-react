import React from 'react';
import Album from './Album.js';
import Artist from './Artist.js';
import Track from './Track.js';

let SearchResult = React.createClass({

  render() {
    let result = this.props.result;
    let albumName = result.album.name;
    let artists = result.artists.map(function (artist) {
      return <Artist key={artist.id} name={artist.name}/>
    });
    let imageUrl = result.album.images[2].url;
    let trackName = result.name;
    let trackUri = result.uri;

    return (
      <div className="SearchResult">
        <Track name={trackName} uri={trackUri}/>
        <Album name={albumName} imageUrl={imageUrl}/>
        {artists}
      </div>
    );
  }
});

export default SearchResult;