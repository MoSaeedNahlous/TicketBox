import React, { createContext,useReducer } from 'react'
import StadiumReducer from './StadiumReducer'
import axios from 'axios'


//intial state

const intialState={
    stadiums:[],
    stadium:{},
    error:{},
    current:null
}

// create context

export const StadiumGlobalContext = createContext(intialState)

//provider

export const StadiumGlobalProvider = ({children}) => {

    const[state,dispatch] = useReducer(StadiumReducer,intialState)

    //Actions
    //GetAllStadiums
        const GetStadiums = () =>{
            axios.get('/stadium/findAll').then(
                (res) =>{dispatch({
                    type: 'GET_STADIUMS',
                    payload:res.data
                })}
            ).catch(
                (err) =>{alert(err.response)}
            );
        }

    //AddStadium
        const AddStadium = (stad) =>{
            axios.post('/stadium/save',stad).then(
                (res) =>{dispatch({
                    type:'ADD_STADIUM',payload:stad
                    
                })
                alert(stad.name +" added Succesfully!")               
                }
            ).catch(err=>{dispatch({type:'HANDLING_ERROR',payload:err.response.data})})
        }

    //DeleteStadiumById
        const DeleteStadium = (stadId) =>{
            axios.delete(`/stadium/deleteById/${stadId}`).then(
                (res) =>{dispatch({
                    type:'DELETE_STADIUM',payload:stadId
                })}
              ).catch(err=>{dispatch({type:'HANDLING_ERROR',payload:err.response.data})})
        }
    
    //UpdateStadiumById

        const UpdateStadiumById = async (stad) =>{
            await axios.post('/stadium/save',stad).then(
                (res) =>{dispatch({
                    type:'UPDATE_STADIUM',payload:stad
                })}
            ).catch(err =>{dispatch({type:'HANDLING_ERROR',payload:err.response})})
        }

    //GetStadiumByID
    const GetStadiumByID = (stadId) =>{
        axios.get(`/stadium/findById/${stadId}`).then(
            res =>{dispatch({
                type:'GET_STADIUM_BY_ID',payload:res.data
            })}
        ).catch(err =>{dispatch({type:'HANDLING_ERROR',payload:err.response})});
    }
    //SetCuurent
    const SetCurrent = stad =>{
        dispatch({
            type:'SET_CURRENT',payload:stad
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
        <StadiumGlobalContext.Provider value={{
            stadiums:state.stadiums,
            stadium:state.stadium,
            error:state.error,
            current:state.current,
            GetStadiums,
            AddStadium,
            DeleteStadium,
            GetStadiumByID,
            UpdateStadiumById,
            SetCurrent,
            ClearCurrent,
            ClearError
        }}>
            {children}
        </StadiumGlobalContext.Provider>
    )

}