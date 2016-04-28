'use strict';

jest.unmock('../js/components/Album');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Album from '../js/components/Album';

describe('Album', () => {

  it('renders the album name and image as a link to the given uri', () => {

    let albumName = 'Album name';
    let albumUri = 'http://www.example.org/albumuri';
    let imageHeight = '100';
    let imageWidth = '200';
    let imageUrl = 'http://www.example.org/imageurl';

    let album = TestUtils.renderIntoDocument(
      <Album name={albumName} imageUrl={imageUrl} imageHeight={imageHeight} imageWidth={imageWidth} uri={albumUri}/>
    );

    let albumNode = ReactDOM.findDOMNode(album);
    let link = albumNode.getElementsByTagName('a')[0];
    let image = link.getElementsByTagName('img')[0];

    expect(link.textContent).toEqual(albumName);
    expect(link.getAttribute('href')).toEqual(albumUri);
    expect(image.getAttribute('src')).toEqual(imageUrl);
    expect(image.getAttribute('height')).toEqual(imageHeight);
    expect(image.getAttribute('width')).toEqual(imageWidth);
  });

});