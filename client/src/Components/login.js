import React from 'react'
import "./login.css"

import ReactFormInputValidation from "react-form-input-validation";
import ParticlesBg from 'particles-bg'
 
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
      <div className="loginform">
        <ParticlesBg type="circle" bg={true} />
      <form onSubmit={this.form.handleSubmit}>
        <h3>Log In</h3>
        <div className="form-group">
              <label>User Name</label>
                <input
                  type="text"
                  className="form-control" placeholder="Username"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.name}
                />
              
              <label className="error">
                {this.state.errors.name ? this.state.errors.name : ""}
              </label>
            </div>
 
            <div className="form-group">
              <label>Email</label>
                <input
                  type="email"
                  className="form-control" placeholder="Email"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.email}
                />
              
              <label className="error">
                {this.state.errors.email ? this.state.errors.email : ""}
              </label>
            </div>
 
            <div className="form-group">
              <label>Password</label>
                <input
                  type="tel"
                  className="form-control" placeholder="Password"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.phone_number}
                />
              
              <label className="error">
                {this.state.errors.phone_number ? this.state.errors.phone_number : ""}
              </label>
            </div>
            
            <button type="submit" className="btn btn-primary btn-block">Log In</button>
            
        </form>
      </div>
      
    )
  }
}
export default Login;