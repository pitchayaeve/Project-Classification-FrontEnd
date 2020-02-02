import React, { Component } from 'react'
import Button from "../Component/Button"

class Register extends Component {
    render() {
        return (
            <section className="section container">
              <div className="columns is-centered">
                <div className="column is-half">
                  <div>Welcome , Please Log In</div>
                <form>
      
                      <div className="field">
                          <label className="label"></label>
                          <div className="control">
                              <input className="input" type="email" name="email" placeholder="Fullname" />
                          </div>
                      </div>
      
                      <div className="field">
                          <label className="label"></label>
                          <div className="control">
                                <input className="input" type="password" name="password" placeholder="Username"/>
                          </div>
                      </div>

                      <div className="field">
                          <label className="label"></label>
                          <div className="control">
                                <input className="input" type="password" name="password" placeholder="Email"/>
                          </div>
                      </div>

                      <div className="field">
                          <label className="label"></label>
                          <div className="control">
                                <input className="input" type="password" name="password" placeholder="Password"/>
                          </div>
                      </div>

                      <div className="field">
                          <label className="label"></label>
                          <div className="control">
                                <input className="input" type="password" name="password" placeholder="ConfirmPassword"/>
                          </div>
                      </div>

                      <div className="field">
                          <label className="label"></label>
                          <div className="control">
                                <input className="input" type="password" name="password" placeholder="Company"/>
                          </div>
                      </div>

                      <div className="field">
                          <label className="label"></label>
                          <div className="control">
                                <input className="input" type="password" name="password" placeholder="UserPurpose"/>
                          </div>
                      </div>
      
                      <div className="field is-grouped">
                          <div className="control">
                              <Button className="button is-link">Register</Button>
      
                          </div>
                      </div>
                </form>
                </div>
              </div>
            </section>
          )
        }
      }
export default Register;