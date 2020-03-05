import React from 'react'
import {Link} from 'react-router-dom'
import syr from '../../res/syr.jpg'


import '../../App.css'

const Card = () => {



    return (
        
        <div className="Mycard zoom" style={{margin:'3%',alignSelf:'center',borderStyle:'solid',borderWidth:'0.1px' ,borderColor:'#343A40' }}>
        <img className="card-img-top" src={syr} alt="Card image cap"/>
  
      <div className="card-body" style={{backgroundColor:'white'}}>
        <h5 className="card-title">team1 vs team2</h5>
        <p className="card-text"> tour at stad from startDate to endDate </p>
        <Link to='/cardPage' className="btn btn-primary"> More info </Link>
      </div>
      </div>
        
    )
}

export default Card
