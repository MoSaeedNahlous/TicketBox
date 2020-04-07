import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import {StadiumGlobalContext} from '../../contexts/stadiumContext/StadiumGlobalState'


const Row = ({stadium}) => {
    const context = useContext(StadiumGlobalContext)

    return (
        

                <li className="list-group-item  wite links" style={{backgroundColor:'#151719'}} >
                <Link to={`/stadium/${stadium.stadiumId}`} className='links wite'>{stadium.name}</Link>
                </li>
    )
}

export default Row
