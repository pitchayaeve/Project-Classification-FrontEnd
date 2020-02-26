//0:32am 22 feb
//it's workkkkkk!
import React, { Component } from "react";
import Button from "./Button";

import { BrowserRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default class Navbar extends Component {

  ClassifyButton() {
    // this.getDataAxios();
    this.props.history.push("/classify");
  }
  CountingButton() {
    // this.getDataAxios();
    this.props.history.push("/counting");
  }
  PatternButton() {
    // this.getDataAxios();
    this.props.history.push("/pattern");
  }
  LearningButton() {
    // this.getDataAxios();
    this.props.history.push("/learning");
  }
  DatasetButton() {
    // this.getDataAxios();
    this.props.history.push("/dataset");
  }
  HardwareButton() {
    // this.getDataAxios();
    this.props.history.push("/hardware");
  }

  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="#">Logo</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span></button>

        <div class="collapse navbar-collapse" id="navbarColor02">
          <ul class="navbar-nav mr-auto">
            
            <li class="nav-item" onClick={this.ClassifyButton.bind(this)}>
              <a class="nav-link" href="/classify">Classify</a>
            </li>

            <li class="nav-item" onClick={this.CountingButton.bind(this)}>
              <a class="nav-link" href="/counting">Counting</a>
            </li>

            <li class="nav-item" onClick={this.PatternButton.bind(this)}>
              <a class="nav-link" href="/pattern">Pattern</a>
            </li>

            <li class="nav-item" onClick={this.LearningButton.bind(this)}>
              <a class="nav-link" href="/learning">Learning</a>
            </li>

            <li class="nav-item" onClick={this.DatasetButton.bind(this)}>
              <a class="nav-link" href="/dataset">Dataset</a>
            </li>

            <li class="nav-item" onClick={this.HardwareButton.bind(this)}>
              <a class="nav-link" href="/hardware">Hardware</a>
            </li>

          </ul>
            </div>
            </nav>
            </div>
        /* /*      
                Home
                 Classify
                 Counting
                 Pattern
                 Learning
                 Dataset
                 Hardware
                 Profile <extend=logout in button>*/
    );
  }
}
