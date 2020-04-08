import React,{useEffect} from 'react'
import StadiumCard from '../layout/StadiumCard'
import {StadiumGlobalContext} from '../../contexts/stadiumContext/StadiumGlobalState'
import bg from '../../res/bghome.jpg'

import '../../App.css'
import { useContext } from 'react'
import NavBar from '../layout/NavBar'
import Footer from '../layout/Footer'

const Stadiums = () => {

    const context = useContext(StadiumGlobalContext)
    const {stadiums,GetStadiums} = context
    useEffect(() => {
        GetStadiums()
    }, [stadiums])

    return (
        <div style={{backgroundImage: `url(${bg})`,backgroundSize:'cover',backgroundRepeat:'repeat',backgroundPositionX:'75%'}}>
            <NavBar />
        <div className="container"> 
            <br/>
            <h1 className="wite" style={{textAlign:'center'}}>Stadiums</h1>
        
            
                
            
                <div className="MyStadiums" >
                    

                {stadiums.map((stadium)=>(<StadiumCard key={stadium.stadiumId} stadium={stadium}/>))}



                    <div  style={{display:'flex',justifyContent:'center'}}>
                        
                        
                    </div>
                    </div>
                    
                    
                    
                
            
            <br />
                
              
            
        </div>
        <Footer />
        </div>
    )
}

export default Stadiums

