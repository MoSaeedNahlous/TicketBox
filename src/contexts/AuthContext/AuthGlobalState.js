import React, { createContext,useReducer} from 'react'
import axios from 'axios'
import AuthReducer from './AuthReducer'


//initialState

const intialState={
    token:localStorage.getItem('token'),
    isAuthinticated:null,
    loading: true,
    user:null,
    error:null
}

//Create Context
export const AuthGlobalContext = createContext(intialState)

//Proider

export const AuthGlobalProvider =({children})=>{

//Create Reducer

 const [state, dispatch] = useReducer(AuthReducer, intialState)

//Methods
//Register User

const RegisterUser =()=>{
    
}

//LoginUser

const LoginUser=()=>{

}

//LoadUser

const LoadUser=()=>{

}

//LogoutUser

const LogoutUser=()=>{

}

return(
    <AuthGlobalContext.Provider value={{
        tokent:state.token,
        user:state.user,
        isAuthinticated:state.isAuthinticated,
        loading: state.loading,
        error:state.error,
        LoadUser,
        LoginUser,
        LogoutUser,
        RegisterUser
    }}>
    {children}
    </AuthGlobalContext.Provider>
    
)
}