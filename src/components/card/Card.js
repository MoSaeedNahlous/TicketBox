import React from 'react'
import {Link} from 'react-router-dom'
import fcb from "../../res/fcb.png"
import '../../App.css'

const Card = (props) => {

  


    return (
        <Link to='/cardPage' className='zoom links'>
        <div style={{backgroundColor:'#151719',padding:'1rem',margin:'1rem',textAlign:'center'}}>
          <div  className="wite" style={{width:'100%'}}><p style={{padding:'0',margin:'0',textAlign:"center",display:'block'}} >for {props.card.tour}  at {props.card.stad}</p></div>
          <div className='row wite'>
          <div className="col-sm-5"><div><img src={fcb} alt="badge"/> {props.card.team1}</div></div>
          <div className="col-sm-2"><div style={{paddingTop:'12px'}}><strong >V.S</strong></div></div>
          <div className="col-sm-5"><div>{props.card.team2}<img src={fcb} alt="badge"/></div></div>
          </div>
          <div className="wite" style={{width:'100%'}}>from: {props.card.startDate} to: {props.card.endDate}</div>
          
          </div>
        </Link>
    )
}

export default Card
