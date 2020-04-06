import React, { Fragment } from 'react'
import { useContext} from 'react'
import {StadiumGlobalContext} from '../../../../contexts/stadiumContext/StadiumGlobalState'

const StadiumTableRow = ({Stadium}) => {

  

    const context = useContext(StadiumGlobalContext)
    
    
    
    

    const deleteRow = ()=>{
        
        context.DeleteStadium(Stadium.stadiumId);
        context.ClearCurrent();
    }
      
  
    return (
        <Fragment>
        <tr>
        <td>{Stadium.stadiumId}</td>
        <td>{Stadium.name}</td>
        <td>{Stadium.city}</td>
        <td>{Stadium.capacity}</td>
        
        <td>
          <button onClick={()=>context.SetCurrent(Stadium)}> <i className="fa fa-pencil" aria-hidden="true"></i></button>
          <button onClick={()=>deleteRow()}><i className="fa fa-trash" aria-hidden="true"></i></button>
        </td>
      </tr>
    </Fragment>
    )
}

export default StadiumTableRow