import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Image from './Image';

const styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    gridList: {
      width: 500,
      height: 450,
      overflowY: 'auto',
    },
  };
const searchUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=495fb3e670e022e74270f6cd9038fff0&format=json&nojsoncallback=1&api_sig=6d81eb9edd1ded1fa9568c1c9eaaaa88&text=taj+mahal'
const baseUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ccc40fa2d0e400ea13fae765dea404ba';
const apiUrl = baseUrl + '&per_page=10&format=json&nojsoncallback=1';
const imgUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=ccc40fa2d0e400ea13fae765dea404ba&format=json&nojsoncallback=1&photo_id=';

class DisplayFlickrImage extends Component {
    constructor() {
        super();
        this.state = {
            photos : [],
            imgSrc : ''
        };
    }

    componentDidMount() {
        return fetch(searchUrl)
          .then(results => results.json())
          .then(data => {
            console.log(data.photos.photo);
            let photos = data.photos.photo.map((photo, i) => {
                return(
                    <div key={i}>
                        {photo.title}
                        <GridTile
                        key={i}
                        title={photo.title}
                        subtitle={<span>by <b>{photo.owner}</b></span>}
                        actionIcon={<IconButton><StarBorder color="black" /></IconButton>}
                        >
                        <Image photoId="{photo.id}"/>
                        </GridTile>
                    </div>
                    
                )
           })
           this.setState({photos:photos});
          })
          .catch((error) => {
            console.error(error);
          });
      }
    
      render() {
        if (this.state.isLoading) {
          return (
            <p>Loading...</p>
          );
        }
        return (
            <div className="App">
            <MuiThemeProvider>
            <div style={styles.root}>
                <GridList
                  cellHeight={180}
                  style={styles.gridList}
                >
                {this.state.photos}
                </GridList>
            </div>
            </MuiThemeProvider>	

          </div>
        );
      }
    }
    
    export default DisplayFlickrImage;
    