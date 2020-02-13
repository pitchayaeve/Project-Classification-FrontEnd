import React, { Component } from "react";
import logo from "../logo.svg";
export default class Header extends Component {
  render() {
    //JSX
    return (
      <div>
        <div style={style.Header}>
          <img
            style={style.Img}
            src={logo}
            className="App-logo"
            alt="logo"
          ></img>
          <div>SORTING AND PICKING SYSTEMS VIA MACHINE LEARNING</div>
        </div>
      </div>
    );
  }
}
const style = {
  Header: {
    color: "white",
    font: "2.5em",
    backgroundColor: "#018CE0",
    display: "flex",
    textalign: "center",
    padding: "auto 1rem ",
    zindex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  Img: {
    height: "10%",
    width: "10%"
  },
}
//   Login: {
//     fontSize: "1rem",
//     height: "50%",
//     width: "500px",
//     margin: "5% auto",
//     justifyContent: "center"
//   },
//   Authen_button: {
//     margin: "10% auto",
//     alignitems: "center",
//     position: "relative",
//     left: "50%",
//     transform: "translateX(-50%)"
//     /* this will calculate what 50% of the element width is and 
//     will move it across the X-axis. The negative value ensures it moves to the left. */
//   }