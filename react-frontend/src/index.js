import React,  {Suspense} from 'react';
import ReactDOM from 'react-dom';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({

});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Suspense fallback={<div></div>}>
        <App />
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
