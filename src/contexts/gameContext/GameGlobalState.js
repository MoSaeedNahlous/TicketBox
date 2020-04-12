import React, { createContext,useReducer } from 'react'
import GameReducer from './GameReducer'
import axios from 'axios'


//intial state

const intialState={
    games:[],
    game:{},
    error:{},
    current1:{},
    current2:{},
    current3:null,
    ready:'no'
}

// create context

export const GameGlobalContext = createContext(intialState)

//provider

export const GameGlobalProvider = ({children}) => {

    const[state,dispatch] = useReducer(GameReducer,intialState)

    //Actions
    //GetAllGames
        const GetGames = () =>{
            axios.get('/game/findAll').then(
                (res) =>{dispatch({
                    type: 'GET_GAMES',
                    payload:res.data
                })}
            ).catch(
                (err) =>{alert(err.response)}
            );
        }

    //AddGame
        const AddGame = () =>{
            axios.post('/game/save',{}).then(
                (res) =>{dispatch({
                    type:'ADD_GAME',payload:res.data
                    
                })
                console.log(res.data)
                alert("proceed to the next Step...")               
                }
            ).catch(err=>{dispatch({type:'HANDLING_ERROR',payload:err.response.data})})
        }

    //AddGame
        const AddGame2 = (game) =>{
            axios.post('/game/save',game).then(
                (res) =>{dispatch({
                    type:'ADD_GAME2',payload:game
                    
                })
                alert("Game added!!")               
                }
            ).catch(err=>{dispatch({type:'HANDLING_ERROR',payload:err.response.data})})
        }
    //DeleteGameById
        const DeleteGame = (gameId) =>{
            axios.delete(`/game/deleteById/${gameId}`).then(
                (res) =>{dispatch({
                    type:'DELETE_GAME',payload:gameId
                })}
              ).catch(err=>{dispatch({type:'HANDLING_ERROR',payload:err.response.data})})
        }
    
    //UpdateGameById

        const UpdateGameById = async (game) =>{
            await axios.post('/game/save',game).then(
                (res) =>{dispatch({
                    type:'UPDATE_GAME',payload:game
                })}
            ).catch(err =>{dispatch({type:'HANDLING_ERROR',payload:err.response})})
        }

    //AddTeamToTheGame

    const AddTeamToTheGame = async (gameId,teamId)=>{
        await axios.post(`/game/addTeam/${gameId}/${teamId}`)
        .then()
        .catch()
    }

    //GetGameByID
    const GetGameByID = (gameId) =>{
        axios.get(`/game/findById/${gameId}`).then(
            res =>{dispatch({
                type:'GET_GAME_BY_ID',payload:res.data
            })}
        ).catch(err =>{dispatch({type:'HANDLING_ERROR',payload:err.response})});
    }
    //SetCuurent1
    const SetCurrent1 = (team1) =>{
        dispatch({
            type:'SET_CURRENT1',payload:team1
        })
    }
    //ClearCuurent1
    const ClearCurrent1 = () =>{
        dispatch({
            type:'CLEAR_CURRENT1'
        })
    }
    //SetCuurent2
    const SetCurrent2 = (team2) =>{
        dispatch({
            type:'SET_CURRENT2',payload:team2
        })
    }
    //ClearCuurent2
    const ClearCurrent2 = () =>{
        dispatch({
            type:'CLEAR_CURRENT2'
        })
    }
    //SetCuurent3
    const SetCurrent3 = stad =>{
        dispatch({
            type:'SET_CURRENT3',payload:stad
        })
    }
    //ClearCuurent3
    const ClearCurrent3 = () =>{
        dispatch({
            type:'CLEAR_CURRENT3'
        })
    }
    //ClearCuurent
    const ClearError = () =>{
        dispatch({
            type:'CLEAR_ERROR'
        })
    }
    //ClearGame
    const ClearGame = () =>{
        dispatch({
            type:'CLEAR_GAME'
        })
    }
    


    


    return(
        <GameGlobalContext.Provider value={{
            games:state.games ,
            game:state.game ,
            error:state.error ,
            current1:state.current1 ,
            current2:state.current2 ,
            current3:state.current3 ,
            ready:state.ready,
            GetGames,
            AddGame,
            AddGame2,
            DeleteGame,
            GetGameByID,
            UpdateGameById,
            AddTeamToTheGame,
            SetCurrent1,
            ClearCurrent1,
            SetCurrent2,
            ClearCurrent2,
            SetCurrent3,
            ClearCurrent3,
            ClearError,
            ClearGame
        }}>
            {children}
        </GameGlobalContext.Provider>
    )

}