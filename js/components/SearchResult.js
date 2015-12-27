import React from 'react';
import Album from './Album.js';
import Artist from './Artist.js';
import Track from './Track.js';

let SearchResult = React.createClass({

  render() {
    let result = this.props.result;
    let albumName = result.album.name;
    let albumUri = result.album.uri;
    let artists = result.artists.map(function (artist) {
      return <Artist key={artist.id} name={artist.name} uri={artist.uri}/>
    });
    let imageUrl = result.album.images[2].url;
    let imageHeight = result.album.images[2].height;
    let imageWidth = result.album.images[2].width;
    let trackName = result.name;
    let trackUri = result.uri;

    return (
      <div className="SearchResult">
        <Track name={trackName} uri={trackUri}/>
        <Album name={albumName} imageUrl={imageUrl} imageHeight={imageHeight} imageWidth={imageWidth} uri={albumUri}/>
        {artists}
      </div>
    );
  }
});

export default SearchResult;