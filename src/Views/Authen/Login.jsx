import React, { Component } from "react";
import Button from "../../Components/Button";
import Header from "../../Components/Header";

export default class Login extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        {/* Login-form*/}
        <div class="form-group" style={style.Login}>
          <label for="userName">Username</label>
          <input type="username" class="form-control" id="username" />
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" />
          <button type="submit" class="btn btn-primary"style={style.Authen_button}>Login</button>
        </div>
      </div>
    );
  }
}
const style ={
    Login: {
        fontSize: "1rem",
        height: "50%",
        width: "500px",
        margin: "5% auto",
        justifyContent: "center"
      },
      Authen_button: {
        margin: "10% auto",
        alignitems: "center",
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)"
        /* this will calculate what 50% of the element width is and 
        will move it across the X-axis. The negative value ensures it moves to the left. */
      }
}
