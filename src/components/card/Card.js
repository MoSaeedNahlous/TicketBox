import React from 'react'
import download from './download.jpg'
import '../../App.css'

const Card = () => {
    return (
        
        <div className="Mycard" style={{margin:'3%',alignSelf:'center',borderStyle:'solid',borderWidth:'0.1px' ,borderColor:'#343A40' }}>
  <img className="card-img-top" src={download} alt="Card image cap"/>
  
  <div className="card-body">
    <h5 className="card-title">x vs y</h5>
    <p className="card-text">Round 32 from EPL</p>
    <a href="#" className="btn btn-primary">More info</a>
  </div>
</div>
        
    )
}

export default Card
