import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import syr from '../../res/syr.jpg'


import '../../App.css'

const Card = (props) => {

  


    return (
        
        <div className="Mycard zoom" style={{margin:'3%',alignSelf:'center',backgroundColor:'rgba(0, 0, 0, 0)'}}>
        <img className="card-img-top" src={syr} alt="Card image cap"/>
  
      <div className="card-body" style={{backgroundColor:'rgba(0, 0, 0, 0)',color:'white'}}>
        <h5 className="card-title">{props.card.team1} vs {props.card.team2}</h5>
        <p className="card-text"> {props.card.tour} at {props.card.stad} from {props.card.startDate} to {props.card.endDate} </p>
        <Link to='/cardPage' className="btn btn-primary" style={{borderStyle:'solid',borderColor:'white',backgroundColor:'rgba(0, 0, 0, 0)'}}> Book </Link>
      </div>
      </div>
        
    )
}

export default Card
