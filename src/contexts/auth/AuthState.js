import React,{useReducer} from 'react'
import AuthContext from './AuthContext'
import AuthReducer from './AuthReducer'
import axios from 'axios'
import {AUTH_ERROR,CLEAR_ERRORS,LOGIN_FAIL,LOGIN_SUCCESS,LOGOUT,REGISTER_FAIL,REGISTER_SUCCESS,USER_LOADED} from '../types'


const AuthState = (props) =>{

    const initialState ={
        token: localStorage.getItem('token'),
        user:null,
        isAuthenticated:null,
        loading:true,
        error:null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState)

    // Load User
    

    
    // Register User

    const register = async formData =>{ 
        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
        }
    
        try{
            const res = await axios.post('http://localhost:9090/api/users/register',formData,config)

            dispatch({
                type:REGISTER_SUCCESS,
                payload:res.data
            })

        }catch(err){

            dispatch({
                type: REGISTER_FAIL,
                payload:err.response.data

            })
        }
    
    }


    // Login User

    //Logout

    //Clear Error

    return(
        <AuthContext.Provider
        value={{
            token: state.token,
            isAuthenticated : state.isAuthenticated,
            loading: state.loading,
            user:state.user,
            error: state.error,
            register
        }}>

        {props.children}
        </AuthContext.Provider>





    );
}


export default AuthState