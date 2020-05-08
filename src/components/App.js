import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ImageSingle from './ImageSingle';
import HomePage from './HomePage';
import Footer from './Footer';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/:id" component={ImageSingle} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
