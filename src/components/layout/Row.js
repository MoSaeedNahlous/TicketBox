import React from 'react'
import { Link } from 'react-router-dom'



const Row = ({stadium}) => {
    

    return (
        

                <li className="list-group-item  wite links" style={{backgroundColor:'#151719'}} >
                <Link to={`/stadium/${stadium.stadiumId}`} className='links wite'>{stadium.name}</Link>
                </li>
    )
}

export default Row
