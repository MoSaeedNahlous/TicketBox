import React from 'react'

const Signup = () => {
    return (
        <div className="container">
          <br />
        <form>
        <div className="form-group">
      <h1 className="flex-center">Create your new account</h1>
    <label for="exampleInputFirstName">First Name</label>
    <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="FirstName" style={{width:'40%'}} required/>
    
  </div>
  <div className="form-group">
      
    <label for="exampleInputLastName">Last Name</label>
    <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="LastName" style={{width:'40%'}} required/>
    
  </div>
  <div className="form-group">
      
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email" style={{width:'50%'}} required/>
    
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" style={{width:'50%'}} required/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">reEnter Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" style={{width:'50%'}} required/>
  </div>
  <div className="form-group">
    <label for="exampleInputNumber">Enter PhoneNumber</label>
    <input type="number" className="form-control" id="exampleInputNumber" placeholder="PhoneNumber" style={{width:'50%'}} required/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">by clikcking her you are accepting our</label><a href='#'> Terms.</a>
  </div>
  <button type="submit" className="btn btn-primary">Signup</button>
  <small>   Do you have an account? You can login by clicking</small><a href='#'> here</a>
</form>
<br />
</div>
    )}

export default Signup
