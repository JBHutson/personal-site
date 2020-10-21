import React, { useState, lazy } from 'react';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Paper from '@material-ui/core/Paper';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import makeStyles from "@material-ui/core/styles/makeStyles";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import responsiveFontSizes from '@material-ui/core/styles/responsiveFontSizes';
import Article from './components/Article';

const PortfolioPage = lazy(() => import('./components/Portfolio'));
const BlogPage = lazy(() => import('./components/Blog'));
const FrontPage = lazy(() => import('./components/Front'));
const TutorialPage = lazy(() => import('./components/Tutorial'));
const Navbar = lazy(() => import('./components/Navbar'));
const Footer = lazy(() => import('./components/Footer'));



function App(){
  window.localStorage.clear();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)', { noSsr: true });
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', prefersDarkMode);

  let theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark': 'light',
      primary: {
        light: '#1769aa',
        main: '#2196f3',
        dark: '#4dabf5',
        contrastText: '#fff',
      },
      secondary: {
        light: '#41257b',
        main: '#5e35b1',
        dark: '#7e5dc0',
        contrastText: '#000',
      },
    },
  });

  const useStyles = makeStyles({
    paper: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    },
    space: {
      flexGrow: 1
    }
  });

  const classes = useStyles();

  theme = responsiveFontSizes(theme);

    return (
      <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <Paper className={classes.paper}>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
          <main>
            <Switch>
              <Route exact path="/">
                <FrontPage/>
              </Route>
              <Route path="/portfolio">
                <PortfolioPage/>
              </Route>
              <Route path="/blog/:slug">
                <Article/>
              </Route>
              <Route path="/blog">
                <BlogPage/>
              </Route>
              <Route path="/tutorial">
                <TutorialPage/>
              </Route>
            </Switch>
          </main>
          <div className={classes.space}></div>
          <Footer/>
        </Paper>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  };

  function useLocalStorage(key, initValue){
    const [storedValue, setStoredValue] = useState(() => {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initValue;
      } catch (error) {
        console.log(error);
      }
    });

    const setValue = value => {
      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        console.log(error);
      }
    };

    return [storedValue, setValue];
  }


export default App;
