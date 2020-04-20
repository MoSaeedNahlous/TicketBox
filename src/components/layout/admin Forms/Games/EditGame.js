import React,{ useContext,useState,useEffect } from 'react'
import {GameGlobalContext} from '../../../../contexts/gameContext/GameGlobalState'
import {TeamGlobalContext} from '../../../../contexts/teamContext/TeamGlobalState'
import {StadiumGlobalContext} from '../../../../contexts/stadiumContext/StadiumGlobalState'
import GameTable from './GameTable'


const EditGame = () => {

  const gmcontext = useContext(GameGlobalContext)
  const tmcontext = useContext(TeamGlobalContext)
  const stdcontext = useContext(StadiumGlobalContext)
  const {current,ClearCurrent} = gmcontext
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

    }else{
      setState({"id":"","deadLine":"","host":"","guest":"","stadium":""})
      document.getElementById("btn2").disabled=true;
      document.getElementById("btn").disabled=true;
    }
   
  }, [current])

  


  return(
    <div className='container'>
      
    <form id="form1">
        <h1>Edit Game</h1>
        <div className="form-group">
      <label>Game Id</label>
      <h6>{state.id==="" ? "Select a game from the table by pressing pencil button from the wanted game!" : state.id }</h6>
    </div>
        
        <div className="row">
          <div className="col-sm-6">
          <div className="form-group">
      <label>Host Team</label>
      <select required className="form-control" name="host" id="host" value={state.host} >
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
      <select required className="form-control" name="guest" id="guest" value={state.guest} >
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
      <select className="form-control" name="stadium" value={state.stadium} id="stadium" required>
      <option value="" hidden> 
          Select Stadium
      </option> 
      {stadiums.map((stadium)=><option key={stadium.stadiumId} value={stadium.stadiumId}>{stadium.name}</option>)}
      </select>
    </div>

    <div className="form-group">
      <label>Game DeadLine</label>
      <input type="text" className="form-control" placeholder="day/month/year hour:minutes" value={state.deadLine} name="deadLine" id="deadLine" required/>
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
  
