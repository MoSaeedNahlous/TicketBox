export default (state,action) =>{
    switch(action.type){
            case 'GET_GAMES':
                return{
                    ...state,
                    games:action.payload
                }
            case 'GET_GAME_BY_ID':
                return{
                    ...state,
                    game:action.payload
                }
            case 'ADD_GAME': 
                return{
                    ...state,
                    game:action.payload,
                    ready:'yes',
                    
                }
            case 'ADD_GAME2':
                return{
                    ...state,
                    games:[action.payload,...state.games]
                    
                }
            case 'DELETE_GAME':
                return{
                    ...state,
                    games:state.games.filter(game => game.id !== action.payload)
                }

            case 'UPDATE_GAME':
                return{
                    ...state,
                    games:state.games.map(game => game.id === action.payload.id ? action.payload : game)
                    
                }
            case 'SET_CURRENT1':
                return{
                    ...state,
                    current1:action.payload
                }
            case 'CLEAR_CURRENT1':
                return{
                    ...state,
                    current1:null
                }
                case 'SET_CURRENT2':
                return{
                    ...state,
                    current2:action.payload
                }
            case 'CLEAR_CURRENT2':
                return{
                    ...state,
                    current2:null
                }
                case 'SET_CURRENT3':
                return{
                    ...state,
                    current3:action.payload
                }
            case 'CLEAR_CURRENT3':
                return{
                    ...state,
                    current3:null
                }
            case 'SET_CURRENT4':
                return{
                    ...state,
                    current4:action.payload
                }
            case 'CLEAR_CURRENT4':
                return{
                    ...state,
                    current4:null
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
            case 'CLEAR_GAME':
                return{
                ...state,
                game:{}
                        
                    }

        default: 
        return state;
    }

}