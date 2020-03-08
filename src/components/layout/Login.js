import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'

const Login = () => {


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")




  const history = useHistory();

  const HandleSubmit = (e) => {
    e.preventDefault();
    const user={"email":email,"password":password}
    console.log(user);
// todo:add URL for posting login requests
    axios.post("insert URL Here!!!",user).then((response) => {
      console.log(response);
      alert("Success!! welcome to TicketBox!")
      history.push('/Home')
    })
    .catch( (err) => {
      console.log(err);
      alert(err);
    });
  }
    return (
        <div className="container">
          <br />
        <form onSubmit={HandleSubmit}>
  <div className="form-group">
      <h1 className="flex-center">Login to your account</h1>
    <label >Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{width:'50%'}} placeholder="Enter email" required
    onChange={(e)=>{setEmail(e.target.value)}}/>
  </div>
  <div className="form-group">
    <label>Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" style={{width:'50%'}} required
    onChange={(e)=>{setPassword(e.target.value)}}/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input"  id="exampleCheck1"/>
    <label className="form-check-label" >Save my password</label>
  </div>
  <button type="submit" onSubmit={HandleSubmit} className="btn btn-primary">Login</button>
  <br/>
  <small>   Forget your password?Click</small><Link to='/'> here</Link>
  <br/>
  <small>   Don't have an account? You can SignUp by clicking</small><Link to='/register'> here</Link>
</form><br /></div>

    )}

export default Login
