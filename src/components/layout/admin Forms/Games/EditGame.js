import React,{ useContext,useState,useEffect } from 'react'
import {GameGlobalContext} from '../../../../contexts/gameContext/GameGlobalState'
import {TeamGlobalContext} from '../../../../contexts/teamContext/TeamGlobalState'
import {StadiumGlobalContext} from '../../../../contexts/stadiumContext/StadiumGlobalState'
import GameTable from './GameTable'


const EditGame = () => {

  const gmcontext = useContext(GameGlobalContext)
  const tmcontext = useContext(TeamGlobalContext)
  const stdcontext = useContext(StadiumGlobalContext)
  const {current,ClearCurrent,UpdateGameById,AddStadiumToTheGame,DeleteTeamFromTheGame,AddTeamToTheGame} = gmcontext
  const {GetTeams,teams} = tmcontext
  const {GetStadiums,stadiums} = stdcontext

  const [state, setState] = useState({"id":"","deadLine":"","host":"","guest":"","stadium":""})

 





  useEffect(() => {
    GetStadiums()
    GetTeams()
    if(current!==null){
      setState({"id":current.id,"deadLine":current.deadLine,"host":current.teams[0].id,"guest":current.teams[1].id,"stadium":current.stadium.stadiumId})
      document.getElementById("btn2").disabled=false;
      document.getElementById("btn").disabled=false;
      document.getElementById("host").disabled=false;
      document.getElementById("guest").disabled=false;
      document.getElementById("stadium").disabled=false;
      document.getElementById("deadLine").disabled=false;

    }else{
      setState({"id":"","deadLine":"","host":"","guest":"","stadium":""})
      document.getElementById("btn2").disabled=true;
      document.getElementById("btn").disabled=true;
      document.getElementById("host").disabled=true;
      document.getElementById("guest").disabled=true;
      document.getElementById("stadium").disabled=true;
      document.getElementById("deadLine").disabled=true;
    }
   
  }, [current])

  const onSubmitHandler =(e)=>{
    e.preventDefault();
    if(current.deadLine!==state.deadLine){
      console.log({"id":state.id,"deadLine":state.deadLine});
      UpdateGameById({"id":state.id,"deadLine":state.deadLine})
    }
    if(current.stadium!==state.stadium){
      console.log({"id":state.id,"stadium":state.stadium});
      AddStadiumToTheGame(state.id,state.stadium)
    }
    if(current.teams[0].id!==state.host){
      console.log({"id":state.id,"host":state.host});
      DeleteTeamFromTheGame(state.id,state.host)
      AddTeamToTheGame(state.id,state.host)
    }
    if(current.teams[1].id!==state.guest){
      console.log({"id":state.id,"guest":state.guest});
      DeleteTeamFromTheGame(state.id,state.guest)
      AddTeamToTheGame(state.id,state.guest)
    }
      
    
    ClearCurrent()
  }

  
  const onChangeHandler =(e)=>{setState({...state,[e.target.name]:e.target.value})}

  


  return(
    <div className='container'>
      
    <form id="form1" onSubmit={onSubmitHandler}>
        <h1>Edit Game</h1>
        <div className="form-group">
      <label>Game Id</label>
      <h6>{state.id==="" ? "Select a game from the table by pressing pencil button from the wanted game!" : state.id }</h6>
    </div>
        
        <div className="row">
          <div className="col-sm-6">
          <div className="form-group">
      <label>Host Team</label>
      <select required className="form-control" name="host" id="host" onChange={onChangeHandler} value={state.host} >
      <option value="" hidden> 
          Select Host team 
      </option> 
       {teams.map((team)=><option key={team.id} value={team.id}>{team.name}</option>)}
      </select>

    
    </div>
     </div>
          <div className="col-sm-6">
          <div className="form-group">
      <label>Guest Team</label>
      <select required className="form-control" name="guest" id="guest" onChange={onChangeHandler} value={state.guest} >
      <option value="" hidden> 
          Select Guest team 
      </option> 
      {teams.map((team)=><option key={team.id} value={team.id} >{team.name}</option>)}
      </select>

    </div>
     </div>

          
        </div>
        
    <div className="form-group">
      <label>Stadium</label>
      <select className="form-control" name="stadium" value={state.stadium} onChange={onChangeHandler}id="stadium" required>
      <option value="" hidden> 
          Select Stadium
      </option> 
      {stadiums.map((stadium)=><option key={stadium.stadiumId} value={stadium.stadiumId}>{stadium.name}</option>)}
      </select>
    </div>

    <div className="form-group">
      <label>Game DeadLine</label>
      <input type="text" className="form-control" placeholder="day/month/year hour:minutes" onChange={onChangeHandler}value={state.deadLine} name="deadLine" id="deadLine" required/>
      <small> example : 31/12/1997 13:10 </small>
    </div>
  

      <small id="small"></small>

      <button type="submit" className="btn btn-primary" id="btn" style={{float:'right'}}>Update Game</button>
      <button type="button" style={{float:'right'}} id="btn2" onClick={()=>ClearCurrent()} className="btn btn-danger">Clear</button>



        </form>
        

<br />
    <GameTable />









    </div>

  )

 
     

  }

export default EditGame
  
