import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <div className="container">
          <br />
        <form>
  <div className="form-group">
      <h1 className="flex-center">Login to your account</h1>
    <label >Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{width:'50%'}} placeholder="Enter email" required/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label>Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" style={{width:'50%'}} required/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input"  id="exampleCheck1"/>
    <label className="form-check-label" >Save my password</label>
  </div>
  <button type="submit" className="btn btn-primary">Login</button>
  <small>   Don't have an account? You can SignUp by clicking</small><Link to='/register'> here</Link>
</form><br /></div>

    )}

export default Login
