
import {AUTH_ERROR,CLEAR_ERRORS,LOGIN_FAIL,LOGIN_SUCCESS,LOGOUT,REGISTER_FAIL,REGISTER_SUCCESS,USER_LOADED} from '../types'

export default (state,action) =>{
    switch(action.type){
        
            case REGISTER_SUCCESS:localStorage.setItem('token',action.payload.token)
            return{
                ...state,...action.payload,isAuthenticated:true,loading:false
            }
            case REGISTER_FAIL: localStorage.removeItem('token')
            return{...state,token:null,isAuthenticated:false,loading:false,user:null,error:action.payload}




        default:return state
    }



}
