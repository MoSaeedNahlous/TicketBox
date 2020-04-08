import React,{useEffect} from 'react'
import TeamCard from '../layout/TeamCard'
import {TeamGlobalContext} from '../../contexts/teamContext/TeamGlobalState'
import bg from '../../res/bghome.jpg'

import '../../App.css'
import { useContext } from 'react'
import NavBar from '../layout/NavBar'
import Footer from '../layout/Footer'

const Teams = () => {

    const context = useContext(TeamGlobalContext)
    const {teams,GetTeams} = context
    useEffect(() => {
        GetTeams()
    }, [teams])

    return (
        <div style={{backgroundImage: `url(${bg})`,backgroundSize:'cover',backgroundRepeat:'repeat',backgroundPositionX:'75%'}}>
            <NavBar />
        <div className="container"> 
            <br/>
            <h1 className="wite" style={{textAlign:'center'}}>Teams</h1>
        
            
                
            
                <div className="MyStadiums" >
                    

                {teams.map((team)=>(<TeamCard key={team.id} team={team}/>))}



                    <div  style={{display:'flex',justifyContent:'center'}}>
                        
                        
                    </div>
                    </div>
                    
                    
                    
                
            
            <br />
                
              
            
        </div>
        <Footer />
        </div>
    )
}

export default Teams

