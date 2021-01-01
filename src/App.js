import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Resume from './components/Resume';
import Blog from './components/Blog';
import Error from './components/Error';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div id="navigation">
          <Navigation />
          </div>
          <div id="content">
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/resume" component={Resume}/>
             <Route path="/blog" component={Blog}/>
             <Route component={Error}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
