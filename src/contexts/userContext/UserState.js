import React,{ useReducer } from 'react'
import axios from 'axios'
import UserContext from './UserContext'
import UserReducer from './UserReducer'


const UserState = () => {




    const intialState= {
        name:"",
        email:"",
        password:"",
        confirm:"",
        loading:false
    }


    const [state, dispatch] = useReducer(UserReducer, initialState);

    //Register
    const


    return (
        
    )
}

export default UserState
