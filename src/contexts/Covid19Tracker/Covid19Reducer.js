export default (state,action) =>{
    switch(action.type){
        case 'GET_DATA':
            return{
                ...state,
                worldData:action.payload.Global
            }
           
        default: 
        return state;
    }

}