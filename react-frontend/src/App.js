import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AboutPage from './components/About';
import BlogPage from './components/Blog';
import FrontPage from './components/Front';
import TutorialPage from './components/Tutorial';
import './App.css';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={FrontPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/tutorial" component={TutorialPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
