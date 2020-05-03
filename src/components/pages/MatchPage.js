import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { GameGlobalContext } from '../../contexts/gameContext/GameGlobalState'



const MatchPage = ({match}) => {
    


    const context = useContext(GameGlobalContext)
    const {game} = context
    const [state, setState] = useState({})
    let obj = {"id":"",stadium:"","teams":[],"deadLine":""}
            obj.id=game.id
            obj.stadium=game.stadium
            obj.teams=game.teams
            obj.deadLine=game.deadLine
            useEffect(() => {
                setState(obj)
            }, [game])
    
            
    if(state !== undefined){
    return (
    
        <div>
            <div className="row">
                {/* <div className="col-sm-4">{state.teams[0]}</div> */}
                <div className="col-sm-4"></div>
                {/* <div className="col-sm-4">{state.teams[1]}</div> */}
            </div>
            
        </div>
    )}
    else{
        return(
        <h1>fuckyou</h1>
        )
    }
}

export default MatchPage
