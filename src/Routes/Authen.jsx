import React, { Component } from 'react'
import Header from '../Components/Header.jsx'
import Router from './Router'
import Login from '../Views/Login'
import { Switch, Route } from "react-router-dom";

export default class Authen extends Component {
    render() {
        return (
          <div className="page">
            <Header />
            <Route path="/login" component={Login}></Route>
          </div>
        );
    }
}
