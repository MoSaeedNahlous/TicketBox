import React from 'react'
import { Link } from 'react-router-dom'

const Tables = () => {

    

    
    return (
        <div className="container">
                    <ul className="list-group">
                        <li className="list-group-item crimsonRedBg wite links">Teams</li>
                        <li className="list-group-item   links" style={{backgroundColor:'#151719'}}><Link to='/' className='links wite'>Bayern</Link></li>
                        <li className="list-group-item   links " style={{backgroundColor:'#151719'}}><Link to='/' className='links wite'>BVB</Link></li>
                        <li className="list-group-item   links " style={{backgroundColor:'#151719'}}><Link to='/' className='links wite'>S04</Link></li>
                        <li className="list-group-item   links " style={{backgroundColor:'#151719'}}><Link to='/' className='links wite'>Hoffienhiem</Link></li>
                        <li className="list-group-item   links " style={{backgroundColor:'#151719'}}><Link to='/teams'><button className='btn btn-primary'> more </button></Link></li>
                    </ul>
                    <br />
                    <ul className="list-group">
                        <li className="list-group-item crimsonRedBg wite links">Stadiums</li>
                        <li className="list-group-item  wite links" style={{backgroundColor:'#151719'}}><Link to='/' className='links wite'>Allianz</Link></li>
                        <li className="list-group-item  wite links" style={{backgroundColor:'#151719'}}><Link to='/' className='links wite'>Stamford bridge</Link></li>
                        <li className="list-group-item  wite links" style={{backgroundColor:'#151719'}}><Link to='/' className='links wite'>Basel</Link></li>
                        <li className="list-group-item  wite links" style={{backgroundColor:'#151719'}}><Link to='/' className='links wite'>Staples center</Link></li>
                        <li className="list-group-item  wite links" style={{backgroundColor:'#151719'}}><Link to='/stadiums'><button className='btn btn-primary'> more </button></Link></li>
                    </ul>
                </div>
    )
}

export default Tables
