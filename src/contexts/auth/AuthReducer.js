
import {AUTH_ERROR,CLEAR_ERRORS,LOGIN_FAIL,LOGIN_SUCCESS,LOGOUT,REGISTER_FAIL,REGISTER_SUCCESS,USER_LOADED} from '../types'

export default (state,action) =>{
    switch(action.type){
        
            case REGISTER_SUCCESS:
            return{...state}
            case REGISTER_FAIL:
            return{...state,error:action.payload}




        default:return state
    }



}
