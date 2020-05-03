import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import {GameGlobalContext} from '../../../contexts/gameContext/GameGlobalState'



const Match = ({game,host,guest}) => {

  const context = useContext(GameGlobalContext)
  const {GetGameByID} = context

  


    return (
        <Link to={`/game/${game.id}`} onClick={()=>{GetGameByID(game.id)}} className='zoom' style={{textDecoration:'none'}}>
        <div style={{backgroundColor:'#151719',padding:'1rem',margin:'1rem',textAlign:'center'}}>
          <div  className="wite" style={{width:'100%'}}><p style={{padding:'0',margin:'0',textAlign:"center",display:'block'}} > at game.stadium.name </p></div>
          <div className='row wite'>
          <div className="col-sm-5"><div><img src={host.image} alt={host.name+"Logo"}/> {host.name}</div></div>
          <div className="col-sm-2"><div style={{paddingTop:'12px'}}><strong >V.S</strong></div></div>
          <div className="col-sm-5"><div>{guest.name}<img src={guest.image} alt={guest.name+"Logo"}/></div></div>
          </div>
          <div className="wite" style={{width:'100%'}}> at:{game.deadLine}</div>
          
          </div>
        </Link>
    )
}

export default Match
