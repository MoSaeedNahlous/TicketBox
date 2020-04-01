export default (state,action) =>{
    switch(action.type){
            case 'GET_STADIUMS':
                return{
                    ...state,stadiums:action.payload
                }
            case 'ADD_STADIUM':
                return{
                    ...state,stadiums: [action.payload,...state.stadiums]
                }
            case 'DELETE_STADIUM':
                return{
                    ...state,stadiums:state.stadiums.filter(stadium => stadium.stadiumId !== action.payload)
                }
            case 'HANDLING_ERROR':
                return{
                    ...state,error:action.payload
                }

        default: 
        return state;
    }

}