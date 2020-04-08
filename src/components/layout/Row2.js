import React from 'react'
import { Link } from 'react-router-dom'



const Row2 = ({team}) => {
    

    return (
        

                <li className="list-group-item  wite links" style={{backgroundColor:'#151719'}} >
                <Link to={`/team/${team.id}`} className='links wite'>{team.name}</Link>
                </li>
    )
}

export default Row2
