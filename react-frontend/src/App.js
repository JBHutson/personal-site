import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PortfolioPage from './components/Portfolio';
import BlogPage from './components/Blog';
import FrontPage from './components/Front';
import TutorialPage from './components/Tutorial';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Paper from '@material-ui/core/Paper';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import './App.css';



function App(){
  const [darkMode, setDarkMode] = useState(false);
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark': 'light',
    },
  });

    return (
      <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <Paper>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
          <main>
            <Switch>
              <Route exact path="/" component={FrontPage} />
              <Route path="/portfolio" component={PortfolioPage} />
              <Route path="/blog" component={BlogPage} />
              <Route path="/tutorial" component={TutorialPage} />
            </Switch>
          </main>
        <Footer/>
        </Paper>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  };


export default App;
