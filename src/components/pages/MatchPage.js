import React from 'react'
import NavBar from '../layout/NavBar'
import Footer from '../layout/Footer'
import bg from '../../res/bghome.jpg'
import { useEffect } from 'react'
import { useContext } from 'react'
import {GameGlobalContext} from '../../contexts/gameContext/GameGlobalState'
import { useState } from 'react'

const MatchPage = ({match}) =>{

    const context = useContext(GameGlobalContext)
    const {game,GetGameByID} = context
    const {deadLine,stadium,teams,tickets} = game
    
    useEffect(() => {
       GetGameByID(match.params.id)
    }, [game])
    return (
        <div style={{backgroundImage: `url(${bg})`,
    backgroundPosition: "50% 50%"}}>
            <NavBar />
        <div className="container" >
            <br />
            <div className='row'>
                <div className="col-md-4" style={{width:'33%',height:'10%'}}>
                    <img src={teams[0].image} alt="team1" style={{width:'15rem',float:'right',borderRadius: '50%'}}/>
                    <h2 style={{float:'right'}}>{teams[0].name}</h2>
                </div>
                <div className="col-md-4" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <h1 className="wite "style={{textAlign:'center',verticalAlign:'middle',fontSize:'8rem'}}>V.S</h1>
                    </div>
                <div className="col-md-4" style={{width:'33%',height:'10%'}}>
                <img src={teams[1].image} alt="team2"   style={{width:'15rem',float:'left',borderRadius: '50%'}}/>
                    <h2 style={{float:'left'}}>{teams[1].name}</h2>
                </div>
            </div>
            <br /
            >
            <div>
                <ul className="list-group col-md-6 offset-md-3" >
                    {/* <li className='list-group-item'>Stadium:    {stadium.name}</li> */}
                    <li className='list-group-item'>Date and Time:   {deadLine}</li>
                </ul>
            </div>
            <hr/>
            
        </div>
        <Footer />
        </div>
    )}


export default MatchPage
