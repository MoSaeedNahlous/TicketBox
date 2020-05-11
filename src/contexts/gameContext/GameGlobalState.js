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
    current4:{},
    current:null,
    ready:'no',
    host:{},
    guest:{}
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
        const AddGame = async (game) =>{
           await axios.post('/game/save',game).then(
                (res) =>{
                    dispatch({type:'ADD_GAME',payload:res.data})
                    console.log(res.data);
                                  
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
    //UpdateTeams
        const UpdateTeams =(hostId,guestId,gameId)=>{
            axios.put(`/gameTeams/updateTeams/${hostId}/${guestId}/${gameId}`).then(
                res=>{
                    dispatch({type:'UPDATE_TEAMS',payload:res.data})
                }
            )
        }
    
    //UpdateGameById

        const UpdateGameById = (game) =>{
            axios.post('/game/save',game).then(
                (res) =>{dispatch({
                    type:'UPDATE_GAME',payload:res.data
                })}
            ).catch(err =>{dispatch({type:'HANDLING_ERROR',payload:err.response})})
        }

    //AddTeamToTheGame
    const AddTeamToTheGame = (gameId,hostId,guestId)=>{
         axios.post(`/gameTeams/insertTeam/${guestId}/${hostId}/${gameId}`)}
        
    //UpdateTeams
    // const UpdateTeams =(gameId,guestId,hostId)=>{
    //     axios.delete(`/gameTeams/deleteTeams/${gameId}`)
    //     axios.post(`/gameTeams/insertTeam/${guestId}/${hostId}/${gameId}`).then(res =>{
    //         dispatch({type:"ADD_TEAMS",payload:res.data})
    //         console.log(res.data)
    //     })
    // }
    //DeleteTeamFromTheGame
    const DeleteTeamFromTheGame = (gameId,teamId)=>{
         axios.delete(`/game/deleteTeam/${gameId}/${teamId}`)
        .then()
        .catch()
    }
    //DeleteAllTeamsFromTheGame
    const DeleteTeamsFromTheGame =(gameId)=>{
        axios.delete(`/gameTeams/deleteTeams/${gameId}`)
        .then()
        .catch()
    }
    //AddStadiumToTheGame
    const AddStadiumToTheGame = async (gameId,stadId)=>{
        await axios.post(`/game/addStadium/${gameId}/${stadId}`)
        .then(res =>dispatch({type:'ADD_STADIUM_TO_GAME',payload:res.data}))
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
    //SetHostAndGuest
    const SetTeams = (hostId,guestId)=>{
        
        axios.get(`/team/findById/${guestId}`).then(res =>{dispatch({
            type:'SET_GUEST',payload:res.data
        })
    console.log("set guest")})
    
        axios.get(`/team/findById/${hostId}`).then(res =>{dispatch({
            type:'SET_HOST',payload:res.data
        })
    console.log("set host")})

    
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
    //SetReady
    const SetReady = () =>{
        dispatch({
            type:'SET_READY'
        })
    }
    //ClearReady
    const ClearReady = () =>{
        dispatch({
            type:'CLEAR_READY'
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
    const SetCurrent = stad =>{
        dispatch({
            type:'SET_CURRENT',payload:stad
        })
    }
    //ClearCuurent3
    const ClearCurrent = () =>{
        dispatch({
            type:'CLEAR_CURRENT'
        })
    }
    //SetCuurent4
    const SetCurrent4 = stad =>{
        dispatch({
            type:'SET_CURRENT4',payload:stad
        })
    }
    //ClearCuurent4
    const ClearCurrent4 = () =>{
        dispatch({
            type:'CLEAR_CURRENT4'
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
            current:state.current ,
            current4:state.current4 ,
            ready:state.ready,
            host:state.host,
            guest:state.guest,
            GetGames,
            AddGame,
            SetTeams,
            DeleteGame,
            GetGameByID,
            UpdateGameById,
            AddTeamToTheGame,
            DeleteTeamFromTheGame,
            SetCurrent1,
            ClearCurrent1,
            SetCurrent2,
            ClearCurrent2,
            SetCurrent,
            ClearCurrent,
            SetCurrent4,
            ClearCurrent4,
            ClearError,
            ClearGame,
            AddStadiumToTheGame,
            DeleteTeamsFromTheGame,
            SetReady,
            ClearReady,
            UpdateTeams
        }}>
            {children}
        </GameGlobalContext.Provider>
    )

}