import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home/home';

import {
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/home' component={Home}></Route>

          <Redirect exact from='/' to='/home'></Redirect>
          <Route path='/*' render={() =><h2>404</h2>
          }></Route>
        </Switch>
      </div>
    );
  }
}
export default App;

