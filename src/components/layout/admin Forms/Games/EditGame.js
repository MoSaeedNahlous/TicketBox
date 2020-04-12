import React,{ useContext,useState,useEffect } from 'react'
import {GameGlobalContext} from '../../../../contexts/gameContext/GameGlobalState'


const EditGame = () => {

  const context = useContext(GameGlobalContext)
  

  useEffect(() => {
   
  }, [])
  
  
  
  
  
  

  
      
  
    
   











  return(
    <div className='container'>
      
      <form >
        <h1>Edit Stadium</h1>
        <div role="alert" style={{ width: "50%" }}>
            <strong style={{color:'red'}}> </strong>
          </div>
        <div className="form-group">
      <label>Stadium ID</label>
      <input type="number" className="form-control" required name='stadiumId' placeholder="Stadium ID"  disabled />
      <div role="alert" style={{ width: "50%" }}>
            <strong style={{color:'red'}}> </strong>
          </div>
    </div>
    <div className="form-group">
      <label>Stadium Name</label>
      <input type="text" className="form-control" required name='name' placeholder="Stadium Name"/>
      <div role="alert" style={{ width: "50%" }}>
            <strong style={{color:'red'}}> </strong>
          </div>
    </div>
    <div className="form-group">
      <label>Stadium Capacity</label>
      <input type='number' className="form-control" required name='capacity'  placeholder="Stadium Capacity" />
      <div role="alert" style={{ width: "50%" }}>
            <strong style={{color:'red'}}> </strong>
          </div>
    </div>
    <div className="form-group">
      <label>Stadium City</label>
      <select className="form-control"   name='city' required >
      <option value="" hidden> 
          Select City 
      </option> 
        <option value='Damascus'>Damascus</option>
        <option value='Aleppo'>Aleppo</option>
        <option value='Lattakia'>Lattakia</option>
        <option value='Homs'>Homs</option>
        <option value='Tartous'>Tartous</option>
        <option value='Daraa'>Daraa</option>
        <option value='Der-El-Zour'>Der El-Zour</option>
        <option value='Al-Rakka'>Al-Rakka</option>
        <option value='Al-Hasakeh'>Al-Hasakeh</option>
        <option value='Al-Swedaa'>Al-Swedaa</option>
        <option value='Idlib'>Idlib</option>
        <option value='Al-Kuneterah'>Al-Kuneterah</option>
      </select>
      <div role="alert" style={{ width: "50%" }}>
            <strong style={{color:'red'}}> </strong>
          </div>
    </div>
    

  <button type="submit" className="btn btn-primary" style={{float:'right'}}>Update Stadium</button>
  <br />
</form>

<br />









    </div>

  )

 
     

  }

export default EditGame
  
