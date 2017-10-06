import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

const imgUrl =
  'https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=ccc40fa2d0e400ea13fae765dea404ba&format=json&nojsoncallback=1&photo_id=';

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: '',
      isLoading: true
    };
  }

  render() {
    let tmpUrl = imgUrl + this.props.photoId;
    fetch(tmpUrl)
      .then(pics => pics.json())
      .then(pic => {
        let src = pic.sizes.size[4].source;
        this.setState({ isLoading: false, imgSrc: src });
      });

    if (this.state.isLoading) {
      return <ProgressBar />;
    } else {
      return (
        <div>
          <img src={this.state.imgSrc} />
        </div>
      );
    }
  }
}

export default Image;
