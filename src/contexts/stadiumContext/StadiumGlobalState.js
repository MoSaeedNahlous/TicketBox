import React, { createContext,useReducer } from 'react'
import StadiumReducer from './StadiumReducer'
import axios from 'axios'


//intial state

const intialState={
    stadiums:[],
    stadium:{},
    error:{}
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
                (err) =>{alert(err.response.data)}
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
              ).catch(err=>{console.log(err.response.data)
                  dispatch({type:'HANDLING_ERROR',payload:err.response.data})})
        }

    //GetStadiumByID
    const GetStadiumByID = (stadId) =>{
        axios.get(`/stadium/findById/${stadId}`).then(
            res =>{dispatch({
                type:'GET_STADIUM_BY_ID',payload:stadId
            })}
        ).catch();
    }

    


    return(
        <StadiumGlobalContext.Provider value={{
            stadiums:state.stadiums,
            stadium:state.stadium,
            error:state.error,
            GetStadiums,
            AddStadium,
            DeleteStadium,
            GetStadiumByID
        }}>
            {children}
        </StadiumGlobalContext.Provider>
    )

}