import React, { Component } from "react";
import { Link } from "react-router-dom";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value }); //e.target.name means whatever name we have take whatever value
  }
  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    };
    console.log("This should be printed in console!");
  }
  render() {
    return (
      <div className="container">
        <br />
        <form onSubmit={onsubmit}>
          <div className="form-group">
            <h1 className="flex-center">Create your new account</h1>
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInput"
              placeholder="FullName"
              style={{ width: "50%" }}
              required
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Email"
              style={{ width: "50%" }}
              required
              name="email"
              value={this.state.email}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              id="passwordId"
              placeholder="Password"
              style={{ width: "50%" }}
              required
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>reEnter Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPasswordId"
              placeholder="Password"
              style={{ width: "50%" }}
              required
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              required
            />
            <label className="form-check-label">
              by clicking her you are accepting our
            </label>
            <Link to="/terms-and-conditions"> Terms and Conditions.</Link>
          </div>
          <button type="submit" className="btn btn-primary">
            Signup
          </button>
          <small> Do you have an account? You can login by clicking</small>
          <Link to="/login"> here</Link>
        </form>
        <br />
      </div>
    );
  }
}

export default Signup;
