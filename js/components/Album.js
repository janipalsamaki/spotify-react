import React from 'react';

let Album = React.createClass({

  render() {
    return (
      <div className="Album">
        <span className="name">{this.props.name}</span>
        <span className="image"><img src={this.props.imageUrl}/></span>
      </div>
    );
  }
});

export default Album;