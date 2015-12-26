import React from 'react';

let Album = React.createClass({

  render() {
    return (
      <div className="Album">
        <a href={this.props.uri}>
          <span className="name">{this.props.name}</span>
          <span className="image"><img src={this.props.imageUrl}/></span>
        </a>
      </div>
    );
  }
});

export default Album;