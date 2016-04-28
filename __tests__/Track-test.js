'use strict';

jest.unmock('../js/components/Track');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Track from '../js/components/Track';

describe('Track', () => {

  it('renders the link and duration of the track', () => {

    let trackName = 'Track name';
    let trackUri = 'http://www.example.org';
    let durationMilliseconds = 150000; // 2 min 30 sec => "2:30"
    let expectedDuration = '2:30';

    let track = TestUtils.renderIntoDocument(
      <Track name={trackName} uri={trackUri} duration={durationMilliseconds}/>
    );

    let trackNode = ReactDOM.findDOMNode(track);
    let link = trackNode.getElementsByTagName('a')[0];
    let name = link.getElementsByClassName('name')[0];
    let duration = trackNode.getElementsByClassName('duration')[0];

    expect(name.textContent).toEqual(trackName);
    expect(link.getAttribute('href')).toEqual(trackUri);
    expect(duration.textContent).toContain(expectedDuration);

  });

  it('can transform duration as human-readable time', () => {
    let track = new Track();

    expect(track.millisecondsToMinutesAndSeconds(2000)).toEqual('0:02');
    expect(track.millisecondsToMinutesAndSeconds(150000)).toEqual('2:30');
    expect(track.millisecondsToMinutesAndSeconds(600000)).toEqual('10:00');
  });

});