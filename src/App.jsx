import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
import Authen from './Routes/Authen';
import Page from './Routes/Page';
import { BrowserRouter } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Authen}></Route>
          <Route path="/classify" component={Page}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
