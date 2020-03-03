import React from 'react'

const AddEmp = () => {
    return (

        <div className='container' style={{backgroundColor:'#F1F1F1'}}>
          <br />
        <form>
           <h1>Add Employee</h1>
    <div className="form-group">
      <label>Name</label>
      <input type="text" className="form-control" placeholder="Name"/>
    </div>
    <div className="form-group">
      <label>Phone</label>
      <input type="text" className="form-control" placeholder="Phone number"/>
    </div>
    <div className="form-group">
      <label >Type</label>
      <select className="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div className="form-group">
      <label >Email</label>
      <input type="Email" className="form-control" placeholder="Email"/>
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
