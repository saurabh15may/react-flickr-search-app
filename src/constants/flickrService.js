const apiSearchUrl =
  'https://api.flickr.com/services/rest/?method=flickr.photos.search';
const apiKey = '&api_key=ccc40fa2d0e400ea13fae765dea404ba';
const apiFormat = '&format=json&nojsoncallback=1&safe_search=1&content_type=1';
const apiCompleteSearchUrl =
  apiSearchUrl + apiKey + apiFormat + '&per_page=24&text=';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    width: 1400,
    height: 700
  }
};

const flickrService = {
  apiCompleteSearchUrl: apiCompleteSearchUrl,
  styles: styles
};

export default flickrService;
