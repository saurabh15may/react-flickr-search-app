import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const SearchBox = props => (
  <div>
    <MuiThemeProvider>
      <TextField
        errorText=""
        floatingLabelText="Please enter keywords to search"
        //value={this.state.searchKey}
        onChange={(e, newValue) => {
          //this.setState({ searchKey: newValue });
          this.props.searchKey = newValue;
        }}
        name="searchKey"
        fullWidth={true}
      />
      />
    </MuiThemeProvider>
  </div>
);

export default SearchBox;
