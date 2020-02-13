import React, { Component } from "react";
import Button from "../../Components/Button";
import Header from "../../Components/Header";

export default class Register extends Component {
  render() {
    return (
    <div>
        <Header></Header>
        {/* Register-form*/}
        <div class="form-group" style={style.Register}>
          <label for="fname">Firstname</label>
          <input type="username" class="form-control" id="firstname" />
          <label for="lname">Lastname</label>
          <input type="username" class="form-control" id="lastname" />
          <label for="email">Email</label>
          <input type="username" class="form-control" id="email" />
          <label for="userName">Username</label>
          <input type="username" class="form-control" id="username" />
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" />
          <label for="confirmpassword">Confirm Password</label>
          <input type="password" class="form-control" id="confirmpassword" />
          {/* button*/}
          <button type="submit" class="btn btn-primary"style={style.Authen_button}>Register</button>
          {/* message*/}
            <div>
                <p style={style.msg}>If you click "Register", 
                you will be registered and agree to Terms & Conditions and Privacy Policy.</p>
            </div>
      </div>
    </div>
    );
  }
}
const style = {
  Register: {
    fontSize: "1rem",
    height: "50%",
    width: "500px",
    margin: "30px auto",
    justifyContent: "center"
  },
  Authen_button: {
    margin: "10% auto 3% auto",
    alignitems: "center",
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)"
    /* this will calculate what 50% of the element width is and 
        will move it across the X-axis. The negative value ensures it moves to the left. */
  },
  msg:{
      fontSize:"11px",
      color:"red",
      margin:"3%",
  }
};
