import React, { createContext,useReducer} from 'react'
import axios from 'axios'
import Covid19Reducer from './Covid19Reducer'


//initialState

const intialState={
    worldData:{"NewConfirmed": '',
    "TotalConfirmed": '',
    "NewDeaths": '',
    "TotalDeaths": '',
    "NewRecovered": '',
    "TotalRecovered": ''}
}

//Create Context
export const Covid19GlobalContext = createContext(intialState)

//Proider

export const Covid19GlobalProvider =({children})=>{

//Create Reducer

 const [state, dispatch] = useReducer(Covid19Reducer, intialState)

//Methods
//GetData
const GetDataCovid19=()=>{
    axios.get('https://api.covid19api.com/summary').then(
        res=>{
            dispatch({type:'GET_DATA',payload:res.data})
        }
    )
}


return(
    <Covid19GlobalContext.Provider value={{
        worldData:state.worldData,
        GetDataCovid19
    }}>
    {children}
    </Covid19GlobalContext.Provider>
    
)
}