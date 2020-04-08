export default (state,action) =>{
    switch(action.type){
            case 'GET_TEAMS':
                return{
                    ...state,
                    teams:action.payload
                }
            case 'GET_TEAM_BY_ID':
                return{
                    ...state,
                    team:action.payload
                }
            case 'ADD_TEAM': 
                return{
                    ...state,
                    teams: [action.payload,...state.teams]
                }
            case 'DELETE_TEAM':
                return{
                    ...state,
                    teams:state.teams.filter(team => team.id !== action.payload)
                }
            case 'UPDATE_TEAM':
                return{
                    ...state,
                    teams:state.teams.map(team => team.id === action.payload.id ? action.payload : team)
                    
                }
            case 'SET_CURRENT':
                return{
                    ...state,
                    current:action.payload
                }
            case 'CLEAR_CURRENT':
                return{
                    ...state,
                    current:null
                }
            case 'HANDLING_ERROR':
                return{
                    ...state,
                    error:action.payload
                }
            case 'CLEAR_ERROR':
                return{
                    ...state,
                    error:{}
                    
                }

        default: 
        return state;
    }

}