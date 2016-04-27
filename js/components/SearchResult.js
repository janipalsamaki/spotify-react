import classnames from 'classnames';
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
    let duration = result.duration_ms;
    let imageUrl = result.album.images[1].url;
    let imageHeight = result.album.images[1].height;
    let imageWidth = result.album.images[1].width;
    let trackName = result.name;
    let trackUri = result.uri;

    let classes = classnames('SearchResult', 'pure-u-1', 'pure-u-md-1-2', 'pure-u-lg-1-3');

    return (
      <div className={classes}>
        <Track name={trackName} uri={trackUri} duration={duration}/>
        <Album name={albumName} imageUrl={imageUrl} imageHeight={imageHeight} imageWidth={imageWidth} uri={albumUri}/>
        {artists}
      </div>
    );
  }
});

export default SearchResult;