import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
import { GridList } from 'material-ui/GridList';
import flickrService from '../constants/flickrService';

class ImageGridList extends Component {
  render() {
    if (this.props.isLoading) {
      return <ProgressBar />;
    } else {
      return (
        <div style={flickrService.styles.root}>
          <GridList
            cellHeight={180}
            cols={8}
            style={flickrService.styles.gridList}
          >
            {this.props.photos}
            <br />
          </GridList>
        </div>
      );
    }
  }
}

export default ImageGridList;
