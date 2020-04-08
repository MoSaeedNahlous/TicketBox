import React, { Fragment } from 'react'
import { useContext} from 'react'
import {TeamGlobalContext} from '../../../../contexts/teamContext/TeamGlobalState'

const TeamTableRow = ({Team}) => {

  

    const context = useContext(TeamGlobalContext)
    
    
    
    

    const deleteRow = ()=>{
        
        context.DeleteTeam(Team.id);
        context.ClearCurrent();
    }
      
  
    return (
        <Fragment>
        <tr>
        <td>{Team.id}</td>
        <td>{Team.name}</td>
        <td>{Team.country}</td>
        <td>{Team.city}</td>
        <td><img height="75px" width="75px" src={Team.image} alt={Team.image}/></td>
        <td>{Team.createdAt}</td>
        <td>{Team.updatedAt}</td>
        <td>
          <button onClick={()=>context.SetCurrent(Team)}> <i className="fa fa-pencil" aria-hidden="true"></i></button>
          <button onClick={()=>deleteRow()}><i className="fa fa-trash" aria-hidden="true"></i></button>
        </td>
      </tr>
    </Fragment>
    )
}

export default TeamTableRow