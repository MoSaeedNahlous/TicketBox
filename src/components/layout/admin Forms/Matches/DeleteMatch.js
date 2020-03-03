import React from 'react'

const DeleteMatch = () => {
    return (
        
 <div style={{backgroundColor:'#F1F1F1'}}>
        <div className='container' >
          <br/>
        <form >
  <h1>Delete Match</h1>
  <div className="form-group">
    <label>Match Id</label>
    <input type="text" className="form-control" placeholder="Match Id"/>
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

export default DeleteMatch
