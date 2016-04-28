'use strict';

jest.unmock('../js/components/Artist');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Artist from '../js/components/Artist';

describe('Artist', () => {

  it('renders the artist name as a link to the given uri', () => {

    let name = 'Artist name';
    let uri = 'http://www.example.org';

    const artist = TestUtils.renderIntoDocument(
      <Artist uri={uri} name={name} />
    );

    const artistNode = ReactDOM.findDOMNode(artist);

    expect(artistNode.textContent).toEqual(name);
    expect(artistNode.getElementsByTagName('a')[0].getAttribute('href')).toEqual(uri);
  });

});