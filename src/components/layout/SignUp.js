import React from 'react'
import {Link} from 'react-router-dom'

const Signup = () => {
    return (
        <div className="container">
          <br />
        <form>
        <div className="form-group">
      <h1 className="flex-center">Create your new account</h1>
    <label>First Name</label>
    <input type="text" className="form-control" id="exampleInput"  placeholder="FirstName" style={{width:'40%'}} required/>
    
  </div>
  <div className="form-group">
      
    <label>Last Name</label>
    <input type="text" className="form-control" id="exampleInput"  placeholder="LastName" style={{width:'40%'}} required/>
    
  </div>
  <div className="form-group">
      
    <label>Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1"  placeholder="Email" style={{width:'50%'}} required/>
    
  </div>
  <div className="form-group">
    <label >Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" style={{width:'50%'}} required/>
  </div>
  <div className="form-group">
    <label >reEnter Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" style={{width:'50%'}} required/>
  </div>
  <div className="form-group">
    <label>Enter PhoneNumber</label>
    <input type="number" className="form-control" id="exampleInputNumber" placeholder="PhoneNumber" style={{width:'50%'}} required/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" required/>
    <label className="form-check-label" >by clicking her you are accepting our</label><Link to='/terms-and-conditions'> Terms and Conditions.</Link>
  </div>
  <button type="submit" className="btn btn-primary">Signup</button>
  <small>   Do you have an account? You can login by clicking</small><Link to='/login'> here</Link>
</form>
<br />
</div>
    )}

export default Signup
