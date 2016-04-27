import React from 'react';

let Album = React.createClass({

  render() {
    return (
      <div className="Album">
        <a className="uri" href={this.props.uri}>
          <div className="name">{this.props.name}</div>
          <div>
            <img className="image" src={this.props.imageUrl} height={this.props.imageHeight} width={this.props.imageWidth}/>
          </div>
        </a>
      </div>
    );
  }
});

export default Album;