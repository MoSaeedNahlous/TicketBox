import React from 'react'


const AddStadium = () => {
    return (
        <div className='container'>
        <form>
      <h1>Add Stadium</h1>
    <div className="form-group">
      <label>Stadium Name</label>
      <input type="text" className="form-control" placeholder="Stadium Name"/>
    </div>
    <div className="form-group">
      <label>City</label>
      <input type="text" className="form-control"  placeholder="City"/>
    </div>
  <form>
  <div className="form-group">
    <label>Stadium Image file</label>
    <input type="file" className="form-control-file" />
  </div>
</form>
  <button type="submit" className="btn btn-primary" style={{float:'right'}}>Add Stadium</button>
</form>
        </div>
    )
}

export default AddStadium
