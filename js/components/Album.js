import React from 'react';

let Album = React.createClass({

  render() {
    return (
      <div className="Album">
        <a className="uri" href={this.props.uri}>
          <span className="name">{this.props.name}</span>
          <img className="image" src={this.props.imageUrl} height={this.props.imageHeight}
               width={this.props.imageWidth}/>
        </a>
      </div>
    );
  }
});

export default Album;