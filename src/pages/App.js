import React, { Component } from 'react';
import DisplayFlickrImage from '../components/DisplayFlickrImage';
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
        <h1 className="App-title">Flick Search App</h1>
        <p className="App-intro">
          <DisplayFlickrImage />
        </p>
      </div>
    );
  }
}

export default App;
