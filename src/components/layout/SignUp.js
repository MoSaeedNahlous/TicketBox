import React from 'react'

const Signup = () => {
    return (
        <div className="container">
          <br />
        <form>
        <div className="form-group">
      <h1 className="flex-center">Create your new account</h1>
    <label>First Name</label>
    <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="FirstName" style={{width:'40%'}} required/>
    
  </div>
  <div className="form-group">
      
    <label>Last Name</label>
    <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="LastName" style={{width:'40%'}} required/>
    
  </div>
  <div className="form-group">
      
    <label>Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email" style={{width:'50%'}} required/>
    
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
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" >by clikcking her you are accepting our</label><a href='#'> Terms.</a>
  </div>
  <button type="submit" className="btn btn-primary">Signup</button>
  <small>   Do you have an account? You can login by clicking</small><a href='#'> here</a>
</form>
<br />
</div>
    )}

export default Signup
