import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const LoginAdmin = () => {
    
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [error, setError] = useState({});
      
       
      
        const history = useHistory();
        const HandleSubmit = async (e) => {
          e.preventDefault();
      
          const user = { email: email, password: password };
          await axios
            .post("http://localhost:8080/api/users/login", user)
            .then(response => {
              
              localStorage.setItem('jwtToken',response.data.token)
              alert("Success!! welcome to TicketBox!");
              history.push("/Admin");
              setError({});
              if(response.data.token){
                axios.defaults.headers.common['Authorization'] =`Bearer ${response.data.token}`}
                else{
                  delete axios.defaults.headers.common['Authorization'];
                }
                
              }
            )
            .catch(err => {
              setError(err.response.data);
              console.log(err);
            });
            
         
        };
    return (
        <div className="container" style={{marginTop:'15%'}} >
            
        <form onSubmit={HandleSubmit}>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email"
            name="email"
            required
            onChange={e => {
              setEmail(e.target.value);
            }} />
            <div role="alert" style={{ width: "50%" }}>
            <strong style={{color:'red'}}> {error.name}</strong>
          </div>
  </div>

  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"  name="password"
            placeholder="Password"
            required
            onChange={e => {
              setPassword(e.target.value);
            }}/>
            <div role="alert" style={{ width: "50%" }}>
          <strong style={{color:'red'}}> {error.password}</strong>
          </div>
  </div>
  <button type="submit" className="btn btn-primary">Login</button>
</form>
        </div>
    )
}


export default LoginAdmin
