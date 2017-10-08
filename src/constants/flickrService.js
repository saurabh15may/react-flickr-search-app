import React from 'react';

const apiSearchUrl =
  'https://api.flickr.com/services/rest/?method=flickr.photos.search';
const apiKey = '&api_key=ccc40fa2d0e400ea13fae765dea404ba';
const apiFormat = '&format=json&nojsoncallback=1';
const apiCompleteSearchUrl =
  apiSearchUrl + apiKey + apiFormat + '&per_page=10' + '&text=';

const apiImgUrl =
  'https://api.flickr.com/services/rest/?method=flickr.photos.getSizes';
const apiCompleteImgUrl = apiImgUrl + apiKey + apiFormat + '&photo_id=';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    width: 900,
    height: 450
  }
};

const flickrService = {
  apiCompleteSearchUrl: apiCompleteSearchUrl,
  apiCompleteImgUrl: apiCompleteImgUrl,
  styles: styles
};

export default flickrService;
