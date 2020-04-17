import React, { Fragment } from 'react'
import { useContext} from 'react'
import {GameGlobalContext} from '../../../../contexts/gameContext/GameGlobalState'

const GameTableRow = ({Game,Host,Guest,Stad}) => {

  
console.log(Game);
    const context = useContext(GameGlobalContext)
    const {SetCurrent3,SetCurrent2,SetCurrent1,SetCurrent4} = context
    
    
    const setHandler = () =>{
      SetCurrent1(Host)
      SetCurrent2(Guest)
      SetCurrent3(Game)
      SetCurrent4(Stad)

    }
    

    const deleteRow = ()=>{
        
        context.DeleteGame(Game.id);
  
        context.ClearCurrent3();
    }
      
  
    return (
        <Fragment>
        <tr>
        <td>{Game.id}</td>
        <td>{Host.name}</td>
        <td>{Guest.name}</td> 
        <td>{Stad.name}</td>
        <td>{Game.deadLine}</td>
        <td>{Game.createdAt}</td>
        <td>{Game.updatedAt}</td>
        
        <td>
          <button onClick={setHandler}> <i className="fa fa-pencil" aria-hidden="true"></i></button>
          <button onClick={()=>deleteRow()}><i className="fa fa-trash" aria-hidden="true"></i></button>
        </td>
      </tr>
    </Fragment>
    )
}

export default GameTableRow