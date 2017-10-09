import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card } from 'material-ui/Card';
import FlickrSearch from '../components/FlickrSearch';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Flickr Image Search App</h1>
        <MuiThemeProvider>
          <Card>
            <FlickrSearch />
          </Card>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
