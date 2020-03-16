import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const AddEmp = () => {
      const history = useHistory();


      const [name, setName] = useState('')
      const [password, setPassword] = useState()
      const [email, setEmail] = useState('')
      const [phone, setPhone] = useState('')
      const [type, setType] = useState("")


    const handleSubmit = (e) => {
      e.preventDefault();
      const emp={"name":name,
      "email": email,
      "password":password,
      "employeeType":type,
      "phone":phone}
      console.log(emp)
      const url="/employee/save"
      axios.post(url,emp).then((response) => {
      console.log(response);
      alert("Success!!")
    
      
    })
    .catch( (err) => {
   
        console.log(err);
    });

    }





    return (

        <div className='container' style={{backgroundColor:'#F1F1F1'}}>
          <br />
        <form onSubmit={handleSubmit}>
           <h1>Add Employee</h1>
    <div className="form-group">
      <label>Name</label>
      <input type="text" className="form-control" required placeholder="Name" onChange={e =>{setName(e.target.value)}}/>
    </div>
    <div className="form-group">
      <label>Password</label>
      <input type="password" className="form-control" required placeholder="Password" onChange={e =>{setPassword(e.target.value)}}/>
    </div>
    <div className="form-group">
      <label>Phone</label>
      <input type="text" className="form-control" required placeholder="Phone number" onChange={e =>{setPhone(e.target.value)}}/>
    </div>
    <div className="form-group">
      <label >Type</label>
      <select className="form-control" onChange={e =>{setType(e.target.value)}}>
      
        <option value='ONE'>ONE</option>
        <option value='TWO'>TWO</option>
        <option value='THREE'>THREE</option>
        <option value='FOUR'>FOUR</option>
      </select>
    </div>
    <div className="form-group">
      <label >Email</label>
      <input type="Email" className="form-control" required placeholder="Email" onChange={e =>{setEmail(e.target.value)}}/>
    </div>
  
  <button type="submit" className="btn btn-primary" style={{float:'right'}}>Add Employee</button>
  <div>
        <h1 style={{color:'#F1F1F1'}}>.</h1>
       </div>
</form>
<br/>

</div>

        
    )
}

export default AddEmp
