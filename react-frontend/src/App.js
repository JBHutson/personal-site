import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AboutPage from './components/About';
import BlogPage from './components/Blog';
import FrontPage from './components/Front';
import TutorialPage from './components/Tutorial';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Paper from '@material-ui/core/Paper';
import './App.css';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <BrowserRouter>
        <Paper>
          <Navbar/>
          <main>
            <Switch>
              <Route exact path="/" component={FrontPage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/blog" component={BlogPage} />
              <Route path="/tutorial" component={TutorialPage} />
            </Switch>
          </main>
        <Footer/>
        </Paper>
      </BrowserRouter>
    );
  }
}

export default App;
