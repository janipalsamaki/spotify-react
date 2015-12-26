import React from 'react';

let Artist = React.createClass({

  render() {
    return (
      <div className="Artist">
        <a className="uri" href={this.props.uri}>
          <span className="name">{this.props.name}</span>
        </a>
      </div>
    );
  }
});

export default Artist;