import React, { createContext,useReducer } from 'react'
import TeamReducer from './TeamReducer'
import axios from 'axios'


//intial state

const intialState={
    teams:[],
    team:{},
    team2:{},
    error:{},
    current:null
}

// create context

export const TeamGlobalContext = createContext(intialState)

//provider

export const TeamGlobalProvider = ({children}) => {

    const[state,dispatch] = useReducer(TeamReducer,intialState)

    //Actions
    //GetAllTeams
        const GetTeams = () =>{
            axios.get('/team/findAll').then(
                (res) =>{dispatch({
                    type: 'GET_TEAMS',
                    payload:res.data
                })}
            ).catch(
                (err) =>{alert(err.response)}
            );
        }

    //AddTeam
        const AddTeam = (team) =>{
            axios.post('/team/save',team).then(
                (res) =>{dispatch({
                    type:'ADD_TEAM',payload:team
                    
                })
                alert(team.name +" added Succesfully!")               
                }
            ).catch(err=>{dispatch({type:'HANDLING_ERROR',payload:err.response.data})})
        }

    //DeleteTeamById
        const DeleteTeam = (id) =>{
            axios.delete(`/team/deleteById/${id}`).then(
                (res) =>{dispatch({
                    type:'DELETE_TEAM',payload:id
                })}
              ).catch(err=>{dispatch({type:'HANDLING_ERROR',payload:err.response.data})})
        }
    
    //UpdateTeamById

        const UpdateTeamById = async (team) =>{
            await axios.post('/team/save',team).then(
                (res) =>{dispatch({
                    type:'UPDATE_TEAM',payload:team
                })}
            ).catch(err =>{dispatch({type:'HANDLING_ERROR',payload:err.response})})
        }

    //GetTeamByID
    const GetTeamByID = (id) =>{
        axios.get(`/team/findById/${id}`).then(
            res =>{dispatch({
                type:'GET_TEAM_BY_ID',payload:res.data
            })}
        ).catch(err =>{dispatch({type:'HANDLING_ERROR',payload:err.response})});
    }
    const GetTeamByID2 = (id) =>{
        axios.get(`/team/findById/${id}`).then(
            res =>{dispatch({
                type:'GET_TEAM_BY_ID2',payload:res.data
            })}
        ).catch(err =>{dispatch({type:'HANDLING_ERROR',payload:err.response})});
    }

    //SetCuurent
    const SetCurrent = team =>{
        dispatch({
            type:'SET_CURRENT',payload:team
        })
    }
    //ClearCuurent
    const ClearCurrent = () =>{
        dispatch({
            type:'CLEAR_CURRENT'
        })
    }
    //ClearCuurent
    const ClearError = () =>{
        dispatch({
            type:'CLEAR_ERROR'
        })
    }
    


    


    return(
        <TeamGlobalContext.Provider value={{
            teams:state.teams,
            team:state.team,
            team2:state.team2,
            error:state.error,
            current:state.current,
            GetTeams,
            AddTeam,
            DeleteTeam,
            GetTeamByID,
            GetTeamByID2,
            UpdateTeamById,
            SetCurrent,
            ClearCurrent,
            ClearError
        }}>
            {children}
        </TeamGlobalContext.Provider>
    )

}