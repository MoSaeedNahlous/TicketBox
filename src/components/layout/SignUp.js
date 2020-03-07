import React, { useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

 const Signup = () =>{

  const [name , setName] = useState("");
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const [confirmPassword , setConfirmPassword] = useState("")

   const HandleSubmit = (e) => {
    e.preventDefault();
    const user={"name":name,"email":email,"password":password,"confirmPassword":confirmPassword}
    console.log(user);
    axios.post('http://localhost:9090/api/users/register',user).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }


    return (
      <div className="container">
        <br />
        <form onSubmit={HandleSubmit}>
          <div className="form-group">
            <h1 className="flex-center">Create your new account</h1>
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInput"
              placeholder="FullName"
              style={{ width: "50%" }}
              onChange={(e)=>{setName(e.target.value)}}
              required
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
              onChange={(e)=>{setEmail(e.target.value)}}
              required
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
              onChange={(e)=>{setPassword(e.target.value)}} 
              required
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
              onChange={(e)=>{setConfirmPassword(e.target.value)}}
              required
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
              by clicking here you are accepting our
            </label>
            <Link to="/termsAndConditions"> Terms and Conditions.</Link>
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

export default Signup;
