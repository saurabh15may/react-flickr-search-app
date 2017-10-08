import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DisplayFlickrImage from './DisplayFlickrImage';

const SearchBox = props => (
  <div>
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
    </MuiThemeProvider>
  </div>
);

export default SearchBox;
