import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { MyAwesomeReactComponent } from './MyAwesomeReactComponent';

const App = () => (
  <MuiThemeProvider>
     <MyAwesomeReactComponent name="Hello Electron!"/>
  </MuiThemeProvider>
);

export { App };
