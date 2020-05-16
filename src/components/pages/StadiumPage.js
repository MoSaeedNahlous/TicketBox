import React from 'react'
import NavBar from '../layout/NavBar'
import Footer from '../layout/Footer'
import {StadiumGlobalContext} from '../../contexts/stadiumContext/StadiumGlobalState'
import { useContext } from 'react'
import { useEffect } from 'react'
import bg from '../../res/bghome.jpg'
const StadiumPage = ({match}) => {

    const context = useContext(StadiumGlobalContext)
    const {GetStadiumByID,stadium} = context
    const {name,city,capacity,image,gates} = stadium

    useEffect(() => {
        GetStadiumByID(match.params.stadiumId)
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
                        <h2 className='wite'>City: {city}</h2>
                        <h3 className='wite'>Capacity: {capacity}</h3>
                        <h3 className='wite'>Gates Number: {gates}</h3>
                    </div>
                    <div className="col-sm-6">
                        <img src={image} width='450' height='300' alt="Sadium Image"/>
                    </div>
                </div>
                
                
                
                <br />
            </div>
            <Footer />
        </div>
    )
}

export default StadiumPage
