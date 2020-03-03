import React from 'react'

const AddTicket = () => {
    return (
        <div className='container'>
        <form>
          <h1>Add Ticket</h1>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label>Game</label>
      <input type="text" className="form-control" placeholder="Game"/>
    </div>
    <div className="form-group col-md-6">
      <label>Price</label>
      <input type="text" className="form-control" placeholder="Price"/>
    </div>
  </div>
  <div className="form-group">
    <label >Section</label>
    <input type="text" className="form-control" placeholder="Section"/>
  </div>

    <div className="form-group">
      <label >Returnable</label>
      <select className="form-control">
        <option selected>Yes</option>
        <option>No</option>
      </select>
    </div>
    <div className="form-group">
      <label>Retrun Date</label>
      <input type="text" className="form-control" placeholder="Return Date (ex: 1/12/2020 )" />
    </div>
  
  <button type="submit" className="btn btn-primary" style={{float:'right'}}>Add Ticket</button>
</form>
        </div>
    )
}

export default AddTicket
