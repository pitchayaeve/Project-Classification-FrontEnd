import React, { Component } from 'react'
import Button from "../Component/Button"

class ForgetPassword_SendE extends Component {
  render() {
    return (
      <section className="section container">
        <div className="columns is-centered">
          <div className="column is-half">
            <h1>Forget password</h1>
            <div>Please enter your email to search for your account.</div>
          <form>

                <div className="field">
                    <label className="label"></label>
                    <div className="control">
                        <input className="input" type="email" name="email" placeholder="Email" />
                    </div>
                </div>

                <div className="field is-grouped">
                    <div className="control">
                        <Button className="button is-link">Get Verify Code</Button>
                    </div>
                </div>
          </form>
          </div>
        </div>
      </section>
    )
  }
}
export default ForgetPassword_SendE;
