import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { debounce } from 'throttle-debounce';
import flickrService from '../constants/flickrService';
import ImageGridList from './ImageGridList';
import ImageGridTile from './ImageGridTile';

class FlickrSearch extends Component {
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
  }

  fetchPhotos() {
    if (this.state.searchKey === '') {
      this.setState({ isLoading: false, photos: [] });
      return;
    } else {
      this.setState({ isLoading: true, photos: [] });
      return fetch(flickrService.apiCompleteSearchUrl + this.state.searchKey)
        .then(results => results.json())
        .then(data => {
          if (data.photos !== undefined) {
            let photos = data.photos.photo.map((photo, i) => {
              return (
                <div key={i}>
                  <ImageGridTile photo={photo} />
                </div>
              );
            });
            this.setState({ isLoading: false, photos: photos });
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

  render() {
    return (
      <div className="App">
        <TextField
          fullWidth={true}
          floatingLabelText="Please enter keywords to search images from Flickr API"
          value={this.state.searchKey}
          onChange={(e, newValue) => {
            this.setState({ searchKey: newValue });
            debounce(200, this.fetchPhotos());
          }}
        />
        <br />
        <br />
        <ImageGridList
          photos={this.state.photos}
          isLoading={this.state.isLoading}
        />
      </div>
    );
  }
}

export default FlickrSearch;
