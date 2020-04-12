import React from 'react'
import { Link } from 'react-router-dom'

const TeamCard = ({team}) => {
    return (
        
        <Link to={`/team/${team.id}`} style={{textDecoration:'none'}} className='linksStad'>
        <div className="bg-wite zoom links" style={{width: '2 rem',margin:'10%',padding:'5%',borderStyle:'solid',borderWidth:'1px',borderRadius:'10%',textDecoration:'none'}}>
            
  
  <div className="card-body" style={{borderBottom:'solid 1px'}}>
    <h6 className="card-text" style={{textAlign:'center',textDecoration:'none'}}><strong>{team.name}</strong></h6>
  </div>
  <img src={team.image} className="card-img-top links" alt={team.name} style={{borderRadius:'10%'}}/>
</div>
</Link>

    )
}

export default TeamCard