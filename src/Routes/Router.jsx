import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";

export default class Router extends Component {
    render() {
        return (
          <div>
            <Switch>
              {/* <Route exact path="/" component={Home}></Route>
              <Route path="/profile" component={Profile}></Route>
              <Route path="/page/:currentPage" component={Home}></Route>
              <Route path="/newpost" component={NewPost}></Route>
              <Route path="/report" component={ReportedPost}></Route>
              <Route exact path="/search" component={Search}></Route>
              <Route path="/post/:id/edit" component={EditPost}></Route>
              <Route path="/post/:id" component={Post}></Route> */}
            </Switch>
            );
          </div>
        );
    }
}
