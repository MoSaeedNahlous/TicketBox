import React, { Fragment, useEffect,useRef } from 'react'
import { useContext} from 'react'
import {GameGlobalContext} from '../../../../contexts/gameContext/GameGlobalState'


const GameTableRow = ({Game,Stad}) => {
 

  

    const context = useContext(GameGlobalContext)
    
    const firstRender = useRef(true)
    const firstRun = useRef(true)
    useEffect(() => {
      context.SetTeams(Game.gameTeams.host,Game.gameTeams.guest)
      firstRender.current=true
      firstRun.current=true
    }, [])

    useEffect(() => {
      if(firstRender.current){
        firstRender.current=false
      }
      else{
        if(firstRun.current){
        firstRun.current=false
      }
      else{
        context.SetTeams(Game.gameTeams.host,Game.gameTeams.guest)
        firstRun.current=true
      }
      }
      
      
      
    }, [Game.gameTeams])
    
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