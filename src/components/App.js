import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ImageSingle from './ImageSingle';
import HomePage from './HomePage';

class App extends Component {
  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/:id" component={ImageSingle} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
