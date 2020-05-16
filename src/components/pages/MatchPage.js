import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { GameGlobalContext } from '../../contexts/gameContext/GameGlobalState'
import NavBar from '../layout/NavBar'
import Footer from '../layout/Footer'
import bg from '../../res/bghome.jpg'



const MatchPage = ({match}) => {
    


    const context = useContext(GameGlobalContext)
    const [gameState, setGameState] = useState({})
    const [hostSt,setHostSt] =useState({})
    const [guestSt,setGuestSt] =useState({})
    useEffect(() => {
        context.GetGameByID(match.params.id)
        setGameState(context.game)
        setHostSt(context.host)
        setGuestSt(context.guest)
    }, [])
    
    
    return (
    
        <div style={{backgroundImage: `url(${bg})`,backgroundSize:'cover',backgroundRepeat:'repeat',backgroundPositionX:'75%'}}>
            <NavBar />
            <div className="container" style={{paddingTop:'5%'}}>
            <div className="row">
                <div style={{textAlign:'center'}} className="col-sm-4">
                    <div><img src={hostSt.image} alt={hostSt.name+" Image"} className="wite" /></div>
                    <div><h2 className="wite">{hostSt.name}</h2></div>
                    
                </div>
                <div className="col-sm-4">
                    <div>
                        <h1 className="wite" style={{textAlign:'center'}}>V.S</h1>
                    </div>
                </div>  
                <div style={{textAlign:'center'}} className="col-sm-4">
                    <div><img src={guestSt.image} alt={guestSt.name+" Image"} className="wite" /></div>
                    <div><h2 className="wite">{guestSt.name}</h2></div>
                </div>    
            </div>

            <br/>

            <div className="row">
                <p className="wite">{JSON.stringify(gameState)}</p>
            </div>
            
            
            </div>
            <Footer />
        </div>
    )
}

export default MatchPage
