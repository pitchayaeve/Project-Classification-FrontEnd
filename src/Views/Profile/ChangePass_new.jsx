import React, { Component } from 'react'
import Button from "../../Components/Button";
import Header from "../../Components/Header";

export default class ChangePassword extends Component {
    render() {
        return (
            <div>
            {/* Header */}<Header></Header> 
            {/* Changepassword-form*/}
            <div class="form-group" style={style.form}>
              <div style={style.title}>Set password</div>
              {/* <label for="password">Old password</label>
              <input type="password" class="form-control" id="password" /> */}
              <label for="password">New password</label>
              {/* var for New Password */}
              <input type="password" class="form-control" id="password" />
              <label for="confirmpassword">Confirm Password</label>
              <input type="password" class="form-control" id="confirmpassword" />
              <button type="submit" class="btn btn-primary"style={style.Authen_button}>Submit</button>
            </div>
          </div>
        );
      }
    }
    const style ={
        form: {
            fontSize: "1rem",
            height: "50%",
            width: "500px",
            margin: "30px auto",
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
          },
          title:{
            fontSize: "2rem",
            textAlign: "center",
            margin: "30px auto",
          },
    }
    