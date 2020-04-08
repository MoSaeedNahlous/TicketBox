import React from 'react'
import NavBar from '../layout/NavBar'
import Footer from '../layout/Footer'
import {TeamGlobalContext} from '../../contexts/teamContext/TeamGlobalState'
import { useContext } from 'react'
import { useEffect } from 'react'
import bg from '../../res/bghome.jpg'
const TeamPage = ({match}) => {

    const context = useContext(TeamGlobalContext)
    const {GetTeamByID,team} = context
    const {name,city,country,image} = team

    useEffect(() => {
        GetTeamByID(match.params.id)
    }, [])

    return (
        <div style={{backgroundImage: `url(${bg})`,backgroundSize:'cover',backgroundRepeat:'repeat',backgroundPositionX:'75%'}}>
            <NavBar />
            <div className="container">
                <br/ >
                <h1 className='wite' style={{textAlign:"center"}}>{name}</h1>
                <br />
                <div className="row">
                    <div className="col-sm-6">
                        <h2 className='wite'>Country: {country}</h2>
                        <h3 className='wite'>City: {city}</h3>
                    </div>
                    <div className="col-sm-6">
                        <img src={image} width='350px' height='350px' alt="Team Logo"/>
                    </div>
                </div>
                
                
                
                <br />
            </div>
            <Footer />
        </div>
    )
}

export default TeamPage
