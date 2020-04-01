import React from 'react'
import {StadiumGlobalContext} from '../../../../contexts/stadiumContext/StadiumGlobalState'
import { useContext } from 'react'
import { useEffect } from 'react'
import StadiumTableRow from './StadiumTableRow'

const EditStadium = () => {
    

  const context = useContext(StadiumGlobalContext)
  let stadId=''
 
    useEffect(() => {
        context.GetStadiums();
    }, [])

  

  const deleteStadium = (e)=>{
    e.preventDefault();
    context.DeleteStadium(stadId)
    document.getElementById('in').value=""
    context.GetStadiums();

  }

    return (
        <div style={{backgroundColor:'#F1F1F1'}}>
        <div className='container' >
          <br/>
        <form onSubmit={deleteStadium}>
  <h1>Delete Stadium</h1>
  <div className="form-group">
    <label>Stadium Id</label>
    <input type="text" className="form-control" placeholder="Stadium Id" id='in' onChange={e => stadId=e.target.value} required/>
    <div role="alert" style={{ width: "50%" }}>
            <strong style={{color:'red'}}> {context.error.message}</strong>
          </div>
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

        <div className='container'>
        <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">City</th>
      <th scope="col">Capacity</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {context.stadiums.map((Stadium) =><StadiumTableRow key={Stadium.stadiumId} Stadium={Stadium} />)}
  </tbody>
</table>
        </div>
        <button onClick={(e)=>{e.preventDefault();context.GetStadiums();}} style={{display:'block',
    marginLeft: 'auto',marginRight: 'auto' }}><i className="fa fa-refresh fa-2x" aria-hidden="true"
       ></i></button>
        
        
       </div>
    )
}

export default EditStadium
