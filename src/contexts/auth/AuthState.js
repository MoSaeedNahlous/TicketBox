import React,{useReducer} from 'react'
import AuthContext from './AuthContext'
import AuthReducer from './AuthReducer'
import axios from 'axios'
import {AUTH_ERROR,CLEAR_ERRORS,LOGIN_FAIL,LOGIN_SUCCESS,LOGOUT,REGISTER_FAIL,REGISTER_SUCCESS,USER_LOADED} from '../types'
import { useHistory } from 'react-router-dom'


const AuthState = (props) =>{

    const initialState ={
        error:{},
        name:'',
        email:'',
        password:'',
        confirmPassword:''
    }

    
    const [state, dispatch] = useReducer(AuthReducer, initialState)


    

    
    // Register User

    const register = async (name,email,password,confirmPassword) =>{ 
        const user = { email: email, password: password };
        
        try{
            const res = await axios.post('http://localhost:8080/api/users/save',user)
            alert("Success!! welcome to TicketBox!! press the button to redirect to login page and login using your new account!!enjoy :-)")
            

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
            error: state.error,
            register
        }}>

        {props.children}
        </AuthContext.Provider>





    );
}


export default AuthState