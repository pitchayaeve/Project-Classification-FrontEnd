import React, { Component } from 'react'
import Button from "../Component/Button"

class LoginForm extends Component {
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
                        <input className="input" type="email" name="email" placeholder="Email" />
                    </div>
                </div>

                <div className="field">
                    <label className="label"></label>
                    <div className="control">
                          <input className="input" type="password" name="password" placeholder="Password"/>
                    </div>
                </div>

                <div className="field is-grouped">
                    <div className="control">
                        <Button className="button is-link">Log in</Button>
                        <Button className="button is-link">Forget password?</Button>
                        <Button className="button is-link">Don' have an account yet? Register</Button>

                    </div>
                </div>
          </form>
          </div>
        </div>
      </section>
    )
  }
}
export default LoginForm