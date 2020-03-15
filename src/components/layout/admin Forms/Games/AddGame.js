import React from 'react'

const AddGame = () => {
    return (
        
        <div className='container'>
        <form>
          <h1>Add Game</h1>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label>Host Team</label>
      <input type="text" className="form-control" placeholder="Host Team"/>
    </div>

    
    <div className="form-group col-md-6">
      <label >Guest Team</label>
      <input type="text" className="form-control"  placeholder="Guest Team"/>
    </div>
  </div>
  <div className="form-group">
    <label>Start Date</label>
    <input type="date" className="form-control" placeholder="Start Date (ex: 1/12/2020 )"/>
  </div>
  <div className="form-group">
    <label >End Date</label>
    <input type="date" className="form-control"  placeholder="Start Date (ex: 1/12/2020 )"/>
  </div>
  <div className="form-group">
    <div className="form-group ">
      <label >Stadium</label>
      <input type="text" className="form-control" placeholder="Stadium"/>
    </div>
  </div>
  <button type="submit" className="btn btn-primary" style={{float:'right'}}>Add Game</button>
</form>
        </div>
        
    )
}

export default AddGame
