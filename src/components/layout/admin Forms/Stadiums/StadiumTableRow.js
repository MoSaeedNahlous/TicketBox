import React, { Fragment } from 'react'
import { useContext,useState } from 'react'
import {StadiumGlobalContext} from '../../../../contexts/stadiumContext/StadiumGlobalState'

const StadiumTableRow = ({Stadium}) => {

  

    const context = useContext(StadiumGlobalContext)
    const [id, setId] = useState(Stadium.stadiumId)
    const [name, setName] = useState(Stadium.name)
    const [city, setCity] = useState(Stadium.city)
    const [capacity, setCapacity] = useState(Stadium.capacity)
    const [img, setImg] = useState(Stadium.imgBlob)
    
    
    

    const deleteRow = (id)=>{
        
        context.DeleteStadium(id);
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
          <button onClick={()=>deleteRow(Stadium.stadiumId)}><i className="fa fa-trash" aria-hidden="true"></i></button>
        </td>
      </tr>
    </Fragment>
    )
}

export default StadiumTableRow