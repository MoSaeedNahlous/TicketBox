import React, { useState} from "react";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios'
import bg from '../../res/bg4.jpg'

 const Signup = () =>{

  

  const [name , setName] = useState("");
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const [confirmPassword , setConfirmPassword] = useState("")
  const [error, setError] = useState({})

  const history = useHistory();
  


   const HandleSubmit = (e) => {
    e.preventDefault();
    const user={"name":name,"email":email,"password":password,"confirmPassword":confirmPassword}
    console.log(user);
    axios.post('http://localhost:8080/api/users/save',user).then((response) => {
      console.log(response);
      alert("Success!! welcome to TicketBox!! press the button to redirect to login page and login using your new account!!enjoy :-)")
      history.push('/login')
      setError({});
    })
    .catch( (err) => {
      setError(err.response.data);
        console.log(err);
    });
  }


    return (
      <div style={{backgroundImage: `url(${bg})`,
    backgroundPosition: "100% 75%",backgroundRepeat:'no-repeat'}}>
      <div className="container" style={{color:'white'}}>
        <br />
        <form onSubmit={HandleSubmit}>
          <div className="form-group" style={{color:'white'}}>
            <h1 className="flex-center">Create your new account</h1>
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInput"
              name="name"
              placeholder="FullName"
              style={{ width: "50%",backgroundColor:'rgba(0, 0, 0, 0)',color:'white' }}
              onChange={(e)=>{setName(e.target.value)}}
              required
            />
            <div role="alert" style={{ width: "50%" }}>
            <strong style={{color:'red'}}> </strong>
          </div>
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              placeholder="Email"
              style={{ width: "50%",backgroundColor:'rgba(0, 0, 0, 0)',color:'white' }}
              onChange={(e)=>{setEmail(e.target.value)}}
              required
            />
            <div role="alert" style={{ width: "50%" }}>
            <strong style={{color:'red'}}> {error.name}</strong>
          </div>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              id="passwordId"
              placeholder="Password"
              name="password"
              style={{ width: "50%",backgroundColor:'rgba(0, 0, 0, 0)',color:'white' }}
              onChange={(e)=>{setPassword(e.target.value)}} 
              required
            />
            <div role="alert" style={{ width: "50%" }}>
            <strong style={{color:'red'}}> {error.password}</strong>
          </div>
          </div>
          <div className="form-group">
            <label>reEnter Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPasswordId"
              placeholder="Password"
              name="confirmPassword"
              style={{ width: "50%",backgroundColor:'rgba(0, 0, 0, 0)',color:'white' }}
              onChange={(e)=>{setConfirmPassword(e.target.value)}}
              required
            />
            <div role="alert" style={{ width: "50%" }}>
            <strong style={{color:'red'}}> {error.confirmPassword}</strong>
          </div>
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
      </div>
    );
    }

export default Signup;
