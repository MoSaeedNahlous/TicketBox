import React, { Fragment, useEffect,useContext } from 'react'
import {GameGlobalContext} from '../../../../contexts/gameContext/GameGlobalState'


const GameTableRow = ({Game,Stad}) => {
 

  

    const context = useContext(GameGlobalContext)
    

    useEffect(() => {
      context.SetHost(Game.gameTeams.host)
      context.SetGuest(Game.gameTeams.guest)
    }, [context.games])

    
    
    const setHandler =()=>{
      context.ClearCurrent()
      context.SetCurrent(Game)
      console.log("this is should be Game : " + JSON.stringify(Game));
    }

    const deleteRowHandler =()=>{
      context.DeleteGame(Game.id);
      context.ClearCurrent()
    }
    return (
        <Fragment>
        <tr>
        <td>{Game.id}</td>
        <td>{context.host.name}</td>
        <td>{context.guest.name}</td> 
        <td>{Stad.name}</td>
        <td>{Game.deadLine}</td>
        <td>{Game.createdAt}</td>
        <td>{Game.updatedAt}</td>
        
        <td>
          <button onClick={setHandler}> <i className="fa fa-pencil" aria-hidden="true"></i></button>
          <button onClick={deleteRowHandler}><i className="fa fa-trash" aria-hidden="true"></i></button>
          
        </td>
      </tr>
    </Fragment>
    )
}

export default GameTableRow