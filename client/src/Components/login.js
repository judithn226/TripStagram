import React from 'react'
import "./login.css"

import ReactFormInputValidation from "react-form-input-validation";
 
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        name: "",
        email: "",
        phone_number: ""
      },
      errors: {}
    };
    this.form = new ReactFormInputValidation(this);
    this.form.useRules({
        name: "required",
        email: "required|email",
        phone_number: "required|numeric|digits_between:10,12",
        //look at documentation to define other rules used//
    });
    this.form.onformsubmit = (fields) => {
      console.log(fields)
      // Do you ajax calls here.
    }
  }
  // <form onSubmit={this.form.handleSubmit}></form>
  render() {
    return (
      <form onSubmit={this.form.handleSubmit}>
            <p>
              <label>
                User Name
                <input
                  type="text"
                  name="name"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.name}
                />
              </label>
              <label className="error">
                {this.state.errors.name ? this.state.errors.name : ""}
              </label>
            </p>
 
            <p>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.email}
                />
              </label>
              <label className="error">
                {this.state.errors.email ? this.state.errors.email : ""}
              </label>
            </p>
 
            <p>
              <label>
                Password
                <input
                  type="tel"
                  name="phone_number"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.phone_number}
                />
              </label>
              <label className="error">
                {this.state.errors.phone_number ? this.state.errors.phone_number : ""}
              </label>
            </p>
            <p>
              <button type="submit">Submit</button>
            </p>
        </form>
    )
  }
}
export default Login;