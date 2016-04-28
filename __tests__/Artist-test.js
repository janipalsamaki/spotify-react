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

    let artist = TestUtils.renderIntoDocument(<Artist uri={uri} name={name} />);

    let artistNode = ReactDOM.findDOMNode(artist);
    let link = artistNode.getElementsByTagName('a')[0];

    expect(link.textContent).toEqual(name);
    expect(link.getAttribute('href')).toEqual(uri);
  });

});