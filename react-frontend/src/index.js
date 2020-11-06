import React,  {Suspense} from 'react';

import ReactDOM from 'react-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import App from './App';

import './index.css';

import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({

});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Suspense fallback={<div></div>}>
        <CssBaseline>
          <App/>
        </CssBaseline>
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
