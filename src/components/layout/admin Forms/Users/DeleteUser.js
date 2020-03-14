import React,{useState} from 'react'
import Axios from 'axios';





const DeleteUser = () => {
const [userId, setUserId] = useState('')
  const handleSubmit = (e) =>{
    e.preventDefault();
    Axios.delete(`http://localhost:8080/api/users/deleteById/${userId}`).then((res) =>{
      console.log(res)
       alert(res.data)
      }).catch( (err) => {
        alert(err.data)
  })
}





    return (
        
        <div style={{backgroundColor:'#F1F1F1'}}>
        <div className='container' >
          <br/>
        <form onSubmit={handleSubmit}>
  <h1>Delete User</h1>
  <div className="form-group">
    <label>User Id</label>
    <input type="text" className="form-control" placeholder="User Id" onChange={(e)=>{setUserId(e.target.value)}}/>
  </div>
  
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox"  required/>
      <label className="form-check-label">
        Are you Sure?
      </label>
    </div>
  </div>
  <div className="form-group">
  <button type="submit" className="btn btn-primary" style={{float:'right'}}>Delete</button>
  </div>
</form>
        </div>
        <h1 style={{color:'#F1F1F1'}}>.</h1>
       </div>
    )
}

export default DeleteUser
