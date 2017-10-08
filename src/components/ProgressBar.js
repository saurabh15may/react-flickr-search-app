import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';

const ProgressBar = () => (
  <div>
    <MuiThemeProvider>
      <CircularProgress size={60} thickness={7} />
    </MuiThemeProvider>
  </div>
);

export default ProgressBar;
