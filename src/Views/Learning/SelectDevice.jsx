import React, { Component } from "react";
import Toggleswitch from "../../Components/Toggleswitch";
import Navbar from "../../Components/Navbar";
import logo from "../../logo.svg";
import "./SelectDevice.css";

export default class SelectDevice extends Component {
  render() {
    return (
      <div >
        <Navbar></Navbar>
        <p>Select Device</p>
        <p>set your device, select one from following device.</p>
        
        <div class="box">
          <img
            style={style.Img}
            src={logo}
            className="App-logo"
            alt="logo"
          ></img>
          <p>Device_1</p>
          <p>delta robot</p>
          auto-capture<Toggleswitch></Toggleswitch>
        </div>
        
        <div class="box">
          <img
            style={style.Img}
            src={logo}
            className="App-logo"
            alt="logo"
          ></img>
          <p>Device_2</p>
          <p>delta robot</p>
          auto-capture<Toggleswitch></Toggleswitch>
        </div>
       
        <div class="box">
          <img
            style={style.Img}
            src={logo}
            className="App-logo"
            alt="logo"
          ></img>
          <p>Device_3</p>
          <p>delta robot</p>
          auto-capture<Toggleswitch></Toggleswitch>
        </div>
      </div>
    );
  }
}
const style = {
  Img: {
    height: "30%",
    width: "30%",
  }
};
