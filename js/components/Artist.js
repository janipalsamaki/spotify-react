import React from 'react';

let Artist = React.createClass({

  render() {
    return (
      <div className="Artist">
        <span className="name">{this.props.name}</span>
      </div>
    );
  }
});

export default Artist;