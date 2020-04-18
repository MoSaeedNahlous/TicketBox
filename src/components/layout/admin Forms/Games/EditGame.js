import React,{ useContext,useState,useEffect } from 'react'
import {GameGlobalContext} from '../../../../contexts/gameContext/GameGlobalState'
import {TeamGlobalContext} from '../../../../contexts/teamContext/TeamGlobalState'
import {StadiumGlobalContext} from '../../../../contexts/stadiumContext/StadiumGlobalState'
import GameTable from './GameTable'


const EditGame = () => {

  const gmcontext = useContext(GameGlobalContext)
  const tmcontext = useContext(TeamGlobalContext)
  const stdcontext = useContext(StadiumGlobalContext)
  const {UpdateGameById,current,ready,SetReady,ClearReady,DeleteTeamsFromTheGame,AddTeamToTheGame,AddStadiumToTheGame} = gmcontext
  const {teams,GetTeams,GetTeamByID,GetTeamByID2,team,team2} = tmcontext
  const {stadiums,GetStadiums,GetStadiumByID} = stdcontext

  const [state, setState] = useState({"id":"","gameIdentifier":"","teams":[],"stadium":"","tickets": [],"deadLine": ""})
  const [teamsSt,setTeamsSt] = useState({"host":"","guest":""})


  useEffect(() => {
    GetTeams()
    GetStadiums()
    if(current !== null){
      setState(current)
      setTeamsSt({"host":current.teams[0],"guest":current.teams[1]})
      console.log("current !== null");
      
    }else{
      setState({"id":"","gameIdentifier":"","teams":[],"stadium":"","tickets": [],"deadLine": ""})
      setTeamsSt({"host":"","guest":""})
      console.log("current === null");
      
    }
  }, [current])

  

  const onChangeTeams =(e)=>{setTeamsSt({...teamsSt,[e.target.name]:e.target.value});console.log(JSON.stringify(state));console.log(JSON.stringify(state));}
  const onChangeState =(e)=>{setState({...state,[e.target.name]:e.target.value});console.log(JSON.stringify(state));console.log(JSON.stringify(state));}
  const onSubmitHandler =(e)=>{
    e.preventDefault();
    console.log("this is state : "+JSON.stringify(state));
    console.log(teamsSt);
    var obj={
      "id": state.id,
      "deadLine": state.deadLine,}
      console.log("this is obj "+JSON.stringify(obj));


    //REQUESTS
    

    DeleteTeamsFromTheGame(state.id)

    AddTeamToTheGame(state.id,teamsSt.host);

    AddTeamToTheGame(state.id,teamsSt.guest);

    UpdateGameById({obj});

    AddStadiumToTheGame(state.id,state.stadium);


  }


  return(
    <div className='container'>
      
    <form onSubmit={onSubmitHandler}>
        <h1>Edit Game</h1>
        
        <div className="row">
          <div className="col-sm-6">
          <div className="form-group">
      <label>Host Team</label>
      <select required className="form-control" name="host" value={teamsSt.host.id} onChange={onChangeTeams} required>
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
      <select required className="form-control" name="guest" value={teamsSt.guest.id} onChange={onChangeTeams} required>
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
      <select className="form-control" name="stadium" value={state.stadium.stadiumId} onChange={onChangeState} required>
      <option value="" hidden> 
          Select Stadium
      </option> 
      {stadiums.map((stadium)=><option key={stadium.stadiumId} value={stadium.stadiumId}>{stadium.name}</option>)}
      </select>
    </div>

    <div className="form-group">
      <label>Game DeadLine</label>
      <input type="text" className="form-control" placeholder="day/month/year hour:minutes" name="deadLine" value={state.deadLine} onChange={onChangeState} required/>
      <small> example : 31/12/1997 13:10 </small>
    </div>
  

      <small id="small"></small>
      <button type="submit" className="btn btn-primary" style={{float:'right'}}>Update Game</button>



        </form>
        

<br />
    <GameTable />









    </div>

  )

 
     

  }

export default EditGame
  
