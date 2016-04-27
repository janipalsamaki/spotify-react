import React from 'react';

let Track = React.createClass({

  render() {
    let duration = this.millisecondsToMinutesAndSeconds(this.props.duration);

    return (
      <div className="Track">
        <a className="uri" href={this.props.uri}>
          <span className="name">{this.props.name}</span>
          <span className="duration"> ({duration})</span>
        </a>
      </div>
    );
  },

  millisecondsToMinutesAndSeconds: function (milliseconds) {
    var minutes = Math.floor(milliseconds / 60000);
    var seconds = ((milliseconds % 60000) / 1000).toFixed(0);

    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }
});

export default Track;