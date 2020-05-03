import React,{useState,useContext, useEffect} from 'react'
import {GameGlobalContext} from '../../../../contexts/gameContext/GameGlobalState'
import {TeamGlobalContext} from '../../../../contexts/teamContext/TeamGlobalState'
import {StadiumGlobalContext} from '../../../../contexts/stadiumContext/StadiumGlobalState'


const AddGame = () => {

  const GameContext = useContext(GameGlobalContext)
  const TeamContext = useContext(TeamGlobalContext)
  const StadiumContext = useContext(StadiumGlobalContext)
  const {teams,GetTeams} = TeamContext
  const {stadiums,GetStadiums} = StadiumContext
  const [state, setState] = useState({"deadLine":"","host":"","guest":"","stadium":"","game":{}})
  var next = false


  useEffect(() => {
    GetStadiums()
    GetTeams()
    setState({...state,game:GameContext.game})
  }, [GameContext.game])

  const onChangeHandler =(e)=>{setState({...state,[e.target.name]:e.target.value})}
    //var gameIdentifier = Math.floor(Math.random() * (999999999999999999 - 1) ) + 1

  const onSubmitHandler1 =(e)=>{
    e.preventDefault()
    GameContext.AddGame({"gameIdentifier":Math.floor(Math.random() * (999999999999999999 - 1) ) + 1,"deadLine":state.deadLine})
    setState({...state,game:GameContext.game})
    document.getElementById("bt").disabled=true
    document.getElementById("bt2").disabled=false
    document.getElementById("stadium").disabled=false
    document.getElementById("host").disabled=false
    document.getElementById("guest").disabled=false
    document.getElementById("deadline").disabled=true
    document.getElementById("firstform").disabled=true
    document.getElementById("secondform").disabled=false
    }
    
    const onSubmitHandler2 =(e)=>{
      e.preventDefault()
      GameContext.AddTeamToTheGame(state.game.id,state.host,state.guest)
      GameContext.AddStadiumToTheGame(state.game.id,state.stadium)
      document.getElementById("bt").disabled=false
      document.getElementById("bt2").disabled=true
      document.getElementById("stadium").disabled=true
      document.getElementById("host").disabled=true
      document.getElementById("guest").disabled=true
      document.getElementById("deadline").disabled=false
      document.getElementById("firstform").disabled=false
      document.getElementById("secondform").disabled=true
      setState({"deadLine":"","host":"","guest":"","stadium":"","game":{}})
      document.getElementById("stadium").value=""
      document.getElementById("host").value=""
      document.getElementById("guest").value=""
      document.getElementById("deadline").value=""

    }
      
      




    return (
        
        <div className='container'>



        
        <h1>AddGame</h1>
        <form onSubmit={onSubmitHandler1} id="firstform">

        <div className="form-group">
              <label>Game DeadLine</label>
              <input type="text" className="form-control" placeholder="day/month/year hour:minutes " id="deadline" required name="deadLine" onChange={onChangeHandler}/>
              <small> example : 31/12/1997 13:10  </small>
            </div>
        <button type="submit" id='bt' className="btn btn-primary" style={{float:'right'}}>Next</button>
              



        </form>
        <br />
        <br />
        <br />
        <hr/>

        <form onSubmit={onSubmitHandler2} id="secondform" disabled>

        <div className="row">
          <div className="col-sm-6">
          <div className="form-group">
      <label>Host Team</label>
      <select required className="form-control"id='host' name="host" onChange={onChangeHandler} disabled>
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
      <select required className="form-control" id='guest' name="guest" onChange={onChangeHandler} disabled>
      <option value="" hidden> 
          Select Guest team 
      </option> 
      {teams.map((team)=><option key={team.id} value={team.id}>{team.name}</option>)}
      </select>
    </div>
     </div>

          
        </div>
        
    <div className="form-group">
      <label>Stadium</label>
      <select required className="form-control" id='stadium' name="stadium" onChange={onChangeHandler} disabled>
      <option value="" hidden> 
          Select Stadium
      </option> 
       {stadiums.map((stadium)=><option key={stadium.stadiumId} value={stadium.stadiumId}>{stadium.name}</option>)}
      </select>
    </div>

    
  

      <button type="submit"  id='bt2' className="btn btn-primary" style={{float:'right'}} disabled>AddGame</button>
      </form>

        

        </div>
        
    )
}

export default AddGame
