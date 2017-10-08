import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
import flickrService from '../constants/flickrService';

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: '',
      isLoading: true
    };
  }

  render() {
    fetch(flickrService.apiCompleteImgUrl + this.props.photoId)
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
