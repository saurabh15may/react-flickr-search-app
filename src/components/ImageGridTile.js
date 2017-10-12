import React, { Component } from 'react';
import { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import flickrService from '../constants/flickrService';
import Image from './Image';
import ProgressBar from './ProgressBar';

class ImageGridTile extends Component {
  render() {
    if (this.props.isLoading) {
      return <ProgressBar />;
    } else {
      return (
        <GridTile
          title={this.props.photo.title}
          subtitle={
            <span>
              by <b>{this.props.photo.owner}</b>
            </span>
          }
          actionIcon={
            <IconButton>
              <StarBorder color="white" />
            </IconButton>
          }
          actionPosition="right"
          titlePosition="bottom"
          cols={1}
          rows={1}
        >
          <Image
            imgSourceBase={
              flickrService.imgBaseUrl +
              '/' +
              this.props.photo.server +
              '/' +
              this.props.photo.id +
              '_' +
              this.props.photo.secret
            }
          />
        </GridTile>
      );
    }
  }
}

export default ImageGridTile;
