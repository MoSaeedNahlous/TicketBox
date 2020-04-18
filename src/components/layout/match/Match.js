import React from 'react'
import {Link} from 'react-router-dom'



const Match = ({game}) => {

  


    return (
        <Link to={`/game/${game.id}`} className='zoom' style={{textDecoration:'none'}}>
        <div style={{backgroundColor:'#151719',padding:'1rem',margin:'1rem',textAlign:'center'}}>
          <div  className="wite" style={{width:'100%'}}><p style={{padding:'0',margin:'0',textAlign:"center",display:'block'}} > at {game.stadium.name} </p></div>
          <div className='row wite'>
          <div className="col-sm-5"><div><img src={game.teams[0].image} alt={game.teams[0].name+"Logo"}/> {game.teams[0].name}</div></div>
          <div className="col-sm-2"><div style={{paddingTop:'12px'}}><strong >V.S</strong></div></div>
          <div className="col-sm-5"><div>{game.teams[1].name}<img src={game.teams[1].image} alt={game.teams[1].name+"Logo"}/></div></div>
          </div>
          <div className="wite" style={{width:'100%'}}> at:{game.deadLine}</div>
          
          </div>
        </Link>
    )
}

export default Match
