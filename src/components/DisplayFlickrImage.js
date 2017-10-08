import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { GridList, GridTile } from 'material-ui/GridList';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import flickrService from '../constants/flickrService';
import Image from './Image';
import ProgressBar from './ProgressBar';
import SearchBox from './SearchBox';

class DisplayFlickrImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      searchKey: '',
      isLoading: true
    };
    this.fetchPhotos = this.fetchPhotos.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: false, photos: [] });
    this.fetchPhotos();
  }
  fetchPhotos() {
    return fetch(flickrService.apiCompleteSearchUrl + this.state.searchKey)
      .then(results => results.json())
      .then(data => {
        if (data.photos != undefined) {
          console.log(data.photos.photo);
          let photos = data.photos.photo.map((photo, i) => {
            return (
              <div key={i}>
                <GridTile
                  key={i}
                  title={photo.title}
                  subtitle={
                    <span>
                      by <b>{photo.owner}</b>
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
                  <Image photoId={photo.id} />
                </GridTile>
              </div>
            );
          });
          this.setState({ isLoading: false, photos: photos });
        } else {
          this.setState({ isLoading: false, photos: [] });
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return <ProgressBar />;
    } else {
      return (
        <div className="App">
          <MuiThemeProvider>
            <TextField
              errorText=""
              floatingLabelText="Please enter keywords to search"
              value={this.state.searchKey}
              onChange={(e, newValue) => {
                this.setState({ searchKey: newValue });
                this.componentDidMount();
              }}
            />
            <br />
            <br />
            <div style={flickrService.styles.root}>
              <GridList cols={5} style={flickrService.styles.gridList}>
                {this.state.photos}
              </GridList>
            </div>
          </MuiThemeProvider>
        </div>
      );
    }
  }
}

export default DisplayFlickrImage;
