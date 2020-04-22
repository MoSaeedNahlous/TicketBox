import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { GameGlobalContext } from '../../contexts/gameContext/GameGlobalState'


const MatchPage = ({match}) => {


    const context = useContext(GameGlobalContext)
    const [state, setState] = useState({"stadium":"","teams":"","deadLine":""}) 
    useEffect(() => {
        context.GetGameByID(match.params.id)
        if(context.game !== {}){
            setState({"stadium":context.game.stadium,"teams":context.game.teams,"deadLine":context.game.deadLine})
        }else{
            setState({"stadium":"","teams":"","deadLine":""})
        }
        
    }, [context.game])

    return (
        <div>
            <p>
                {JSON.stringify(state)}
            </p>
            
        </div>
    )
}

export default MatchPage
