import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import bg from '../../res/bg4.jpg'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

 

  const history = useHistory();
  const HandleSubmit = e => {
    e.preventDefault();

    const user = { email: email, password: password };
    console.log(user);
    axios
      .post("http://localhost:8080/api/users/login", user)
      .then(response => {
        console.log(response);
        alert("Success!! welcome to TicketBox!");
        history.push("/Home");
        setError({});
      })
      .catch(err => {
        setError(err.response.data);
        console.log(err);
      });
      
   
  };

  return (
    <div style={{backgroundImage: `url(${bg})`,
    backgroundPosition: "100% 75%",backgroundRepeat:'no-repeat'}} >
    <div className="container">
      <br />
      <form onSubmit={HandleSubmit}>
        <div className="form-group" style={{color:'white'}}>
          <h1 className="flex-center" style={{color:'white'}}>Login to your account</h1>
          <label style={{color:'white'}}>Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            style={{ width: "50%" ,backgroundColor:'rgba(0, 0, 0, 0)',color:'white'}}
            placeholder="Enter email"
            name="email"
            required
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
          <div role="alert" style={{ width: "50%" }}>
            <strong style={{color:'red'}}> {error.name}</strong>
          </div>
        </div>
        <div className="form-group" style={{color:'white'}}>
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            style={{ width: "50%" ,backgroundColor:'rgba(0, 0, 0, 0)'}}
            name="password"
            required
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
          <div role="alert" style={{ width: "50%" }}>
          <strong style={{color:'red'}}> {error.password}</strong>
          </div>
        </div>
        <div className="form-group form-check" style={{color:'white'}}>
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label">Save my password</label>
        </div>
        <button
          type="submit"
          onSubmit={HandleSubmit}
          className="btn btn-primary"
        >
          Login
        </button>
            <br />
        <br />
        <small style={{color:'white'}}> Forget your password?Click</small>
        <Link to="/"> here</Link>
        <br />
        <small style={{color:'white'}}> Don't have an account? You can SignUp by clicking</small>
        <Link to="/register"> here</Link>
      </form>
      <br />
    </div>
    <br />
    <br />
    </div>
  );
};

export default Login;
