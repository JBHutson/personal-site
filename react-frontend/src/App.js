import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PortfolioPage from './components/Portfolio';
import BlogPage from './components/Blog';
import FrontPage from './components/Front';
import TutorialPage from './components/Tutorial';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Paper from '@material-ui/core/Paper';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import responsiveFontSizes from '@material-ui/core/styles/responsiveFontSizes';

import Anime from 'react-anime';



function App(){
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);
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
  theme = responsiveFontSizes(theme);

    return (
      <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <Paper>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
          <main>
            <Switch>
              <Route exact path="/">
                <Anime opacity={[0, 1]} translateY={['100vh', 0]}>
                  <FrontPage/>
                </Anime>
              </Route>
              <Route path="/portfolio">
                <Anime opacity={[0, 1]} translateY={['100vh', 0]}>
                  <PortfolioPage/>
                </Anime>
              </Route>
              <Route path="/blog">
                <Anime opacity={[0, 1]} translateY={['100vh', 0]}>
                  <BlogPage/>
                </Anime>
              </Route>
              <Route path="/tutorial">
                <Anime opacity={[0, 1]} translateY={['100vh', 0]}>
                  <TutorialPage/>
                </Anime>
              </Route>
            </Switch>
          </main>
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
