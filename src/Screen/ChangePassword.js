import React, { Component } from 'react'
import Button from "../Component/Button"

class ChangePassword extends Component {
  render() {
    return (
      <section className="section container">
        <div className="columns is-centered">
          <div className="column is-half">
            <div>Change Password</div>
          <form>
                <div className="field">
                    <label className="label"></label>
                    <div className="control">
                        <input className="input" type="email" name="email" placeholder="Old Password" />
                    </div>
                </div>

                <div className="field">
                    <label className="label"></label>
                    <div className="control">
                        <input className="input" type="email" name="email" placeholder="New Password" />
                    </div>
                </div>

                <div className="field">
                    <label className="label"></label>
                    <div className="control">
                          <input className="input" type="password" name="password" placeholder="Confirm Password"/>
                    </div>
                </div>

                <div className="field is-grouped">
                    <div className="control">
                        <Button className="button is-link">Submit</Button>
                        <Button className="button is-link">Cancel</Button>

                    </div>
                </div>
          </form>
          </div>
        </div>
      </section>
    )
  }
}
export default ChangePassword;