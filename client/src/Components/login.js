import React, {Component} from 'react'
import { ButtonInput } from 'react-bootstrap'
import { Form } from 'react-bootstrap-validation'

export default class LoginForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      email: '',
      password: ''
    }
    console.log(props)
  }

  _handleValidSubmit(values) {}
  _handleInvalidSubmit(errors, values) {}

  render() {
    return (
      <div>
        <div className="account">
          <div className="container">
            <div className="page-title">Login</div>
            <div className="page-desc">Email used at sign up</div>
            <Form
              onValidSubmit={this._handleValidSubmit.bind(this)}
              onInvalidSubmit={this._handleInvalidSubmit.bind(this)}>
              <ValidatedInput
                type="text"
                label="Email"
                name="email"
                validate="required,isEmail"
                errorHelp={{
                  required: "Please enter your e-mail",
                  isEmail: "Email is invalid"
                }}
              />

              <ValidatedInput
                type="password"
                label="Password"
                name="password"
                validate="required,isLength:6:60"
                errorHelp={{
                  required: "Please specify a password",
                  isEmail: "Password must be at least 6 characters"
                }}
              />

              <ButtonInput
                type="submit"
                bsSize="large"
                bsStyle="primary"
                value="LOGIN"
              />
            </Form>
          </div>
        </div>
      </div>
    )
  }
}