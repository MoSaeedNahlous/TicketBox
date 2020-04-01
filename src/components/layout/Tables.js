import React, { Fragment ,useContext} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'                                                                      
import { useEffect } from 'react'
import { useState } from 'react'
import {StadiumGlobalContext} from './../../contexts/stadiumContext/StadiumGlobalState'



const Tables = () => {

         const context = useContext(StadiumGlobalContext)
         


    const [stadiums, setStadiums] = useState([]);

    useEffect(() => {
        context.GetStadiums()   
    }, [])



    
    return (
        <div className="container">
                    <ul className="list-group">
                        <li className="list-group-item crimsonRedBg wite links">Teams</li>
                        <li className="list-group-item   links " style={{backgroundColor:'#151719'}}><Link to='/' className='links wite'>Bayern</Link></li>
                        <li className="list-group-item   links " style={{backgroundColor:'#151719'}}><Link to='/' className='links wite'>BVB</Link></li>
                        <li className="list-group-item   links " style={{backgroundColor:'#151719'}}><Link to='/' className='links wite'>S04</Link></li>
                        <li className="list-group-item   links " style={{backgroundColor:'#151719'}}><Link to='/' className='links wite'>Hoffienhiem</Link></li>
                        <li className="list-group-item   links " style={{backgroundColor:'#151719'}}><Link to='/teams'><button className='btn btn-primary'> more </button></Link></li>
                    </ul>
                    <br />
                    <ul className="list-group">
                        <li className="list-group-item crimsonRedBg wite links">Stadiums</li>
                        
                            {
                                (context.stadiums.length>5) ? <Fragment>
                                    {context.stadiums.slice(0,5).map((stad) =><li className="list-group-item  wite links" style={{backgroundColor:'#151719'}} key={stad.stadiumId}><Link to='/' className='links wite'>{stad.name}</Link></li>)}
                                    <li className="list-group-item   links " style={{backgroundColor:'#151719'}}><Link to='/teams'><button className='btn btn-primary'> more </button></Link></li>
                                    </Fragment>
                            :  context.stadiums.map((stad) =><li className="list-group-item  wite links" style={{backgroundColor:'#151719'}} key={stad.stadiumId}><Link to='/' className='links wite'>{stad.name}</Link></li>)
                                
                                
                            }
                            
                            
                            
                        
                        
                    
                    </ul>
                </div>
    )
}

export default Tables
