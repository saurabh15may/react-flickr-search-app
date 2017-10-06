import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Image from './Image';
import ProgressBar from './ProgressBar';
import SearchBox from './SearchBox';
import TextField from 'material-ui/TextField';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    width: 800,
    height: 450,
    overflowX: 'auto'
  }
};
const searchUrl =
  'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=ccc40fa2d0e400ea13fae765dea404ba&format=json&nojsoncallback=1&per_page=10&text=';
const baseUrl =
  'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ccc40fa2d0e400ea13fae765dea404ba';
const apiUrl = baseUrl + '&per_page=10&format=json&nojsoncallback=1';
const imgUrl =
  'https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=ccc40fa2d0e400ea13fae765dea404ba&format=json&nojsoncallback=1&photo_id=';

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
    this.fetchPhotos();
  }
  fetchPhotos() {
    return fetch(searchUrl + this.state.searchKey)
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
                console.log(newValue);
                this.componentDidMount();
              }}
              name="searchKey"
              fullWidth={false}
            />
            <br />
            <br />
            <div style={styles.root}>
              <GridList cols={5} style={styles.gridList}>
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
