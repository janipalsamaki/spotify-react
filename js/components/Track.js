import React from 'react';

let Track = React.createClass({

  render() {
    return (
      <div className="Track">
        <a className="uri" href={this.props.uri}>
          <span className="name">{this.props.name}</span>
        </a>
      </div>
    );
  }
});

export default Track;