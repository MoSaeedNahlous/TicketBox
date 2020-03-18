import React from 'react'
import { Link } from 'react-router-dom'

const Tables = () => {

    

    
    return (
        <div className="container">
                    <ul className="list-group">
                        <li className="list-group-item bg-blu wite">Teams</li>
                        <li className="list-group-item bg-wite blu"><Link to='/'>Bayern</Link></li>
                        <li className="list-group-item bg-wite blu "><Link to='/'>BVB</Link></li>
                        <li className="list-group-item bg-wite blu "><Link to='/'>S04</Link></li>
                        <li className="list-group-item bg-wite blu "><Link to='/'>Hoffienhiem</Link></li>
                        <li className="list-group-item bg-wite blu "><Link to='/teams'><button className='btn btn-primary'> more </button></Link></li>
                    </ul>
                    <br />
                    <ul className="list-group">
                        <li className="list-group-item bg-blu wite">Stadiums</li>
                        <li className="list-group-item bg-wite blu"><Link to='/'>Allianz</Link></li>
                        <li className="list-group-item bg-wite blu"><Link to='/'>Stamford bridge</Link></li>
                        <li className="list-group-item bg-wite blu"><Link to='/'>Basel</Link></li>
                        <li className="list-group-item bg-wite blu"><Link to='/'>Staples center</Link></li>
                        <li className="list-group-item bg-wite blu"><Link to='/stadiums'><button className='btn btn-primary'> more </button></Link></li>
                    </ul>
                </div>
    )
}

export default Tables
