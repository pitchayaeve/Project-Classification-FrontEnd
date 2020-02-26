import React, { Component } from "react";
//import Button from "../../Components/Button";
// import Header from "../../Components/Header";
import logo from "../../logo.svg";

export default class AddNew extends Component {
  render() {
    return (
      <div>
        <div class="Header" style={style.Header}></div>
        {/* Addnew-form*/}

        <div class="form-group" style={style.form}>
          <div style={style.title}>
            <h1>Add New Data Type</h1>
            <p>if your data not similar to any type, you can add new type</p>
            <img
              style={style.Img}
              src={logo}
              className="App-logo"
              alt="logo"
            ></img>
          </div>
          <div style={style.form}> 
          <label for="ID">ID</label>
          <input type="username" class="form-control" id="obj.id" />
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" />

          
            <div class="input-group-append">
              <label for="Type">
                Type
                <select class="form-control">
                  {/* Data type option */}
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </label>
            </div>

            <div class="input-group-append">
              <label for="Size">
                Size
                <select class="form-control">
                  {/* Data type option */}
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </label>
            </div>

            <div class="input-group-append">
              <label for="Colour">
                Colour
                <select class="form-control">
                  {/* Data type option */}
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </label>
            </div>
          </div>

          <button
            type="submit"
            class="btn btn-primary"
            style={style.Authen_button}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}
const style = {
  Img: {
    height: "10%",
    width: "10%"
  },
  Form: {
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
  title: {
    fontSize: "2rem",
    textAlign: "center",
    margin: "30px auto"
  },
  Header: {
    color: "black",
    fontSize: "2.5em",
    backgroundColor: "#BLUE",
    display: "flex",
    textAlign: "center",
    padding: "auto 1rem",
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
};
