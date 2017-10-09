import React, { Component } from 'react';

class Image extends Component {
  render() {
    return (
      <div>
        <div>
          <a href={this.props.imgSourceBase + '_b.jpg'} target="_blank">
            <img
              src={this.props.imgSourceBase + '_n.jpg'}
              alt=""
              width="240"
              height="180"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Image;
