import React, { useRef, Fragment } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { GameGlobalContext } from '../../../../contexts/gameContext/GameGlobalState'

const TicketsTableRow = ({Game,Stad}) => {
    
    const context = useContext(GameGlobalContext)
    
    const firstRender = useRef(true)
    const firstRun = useRef(true)

    useEffect(() => {
      context.SetHost(Game.gameTeams.host)
      context.SetGuest(Game.gameTeams.guest)
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
        //context.SetTeams(Game.gameTeams.host,Game.gameTeams.guest)
        firstRun.current=true
      }
      }
      
      
      
    }, [Game.gameTeams])

    const clickHandler =()=>{
        context.ViewTickets(Game.id)
    }
    
    
    return (
        <Fragment>
        <tr>
        <td>{Game.id}</td>
        <td>{context.host.name}</td>
        <td>{context.guest.name}</td> 
        <td>{Stad.name}</td>
        <td>{Game.deadLine}</td>
        
        
        <td>
          <button onClick={clickHandler}><i className="fas fa-eye" aria-hidden="true"></i></button>
          <button> <i className="fas fa-plus" aria-hidden="true"></i></button>


        </td>
      </tr>

    


    </Fragment>
    )
}

export default TicketsTableRow
