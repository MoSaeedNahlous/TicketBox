import React,{useState,useContext, useEffect} from 'react'
import {GameGlobalContext} from '../../../../contexts/gameContext/GameGlobalState'
import {TeamGlobalContext} from '../../../../contexts/teamContext/TeamGlobalState'
import {StadiumGlobalContext} from '../../../../contexts/stadiumContext/StadiumGlobalState'


const AddGame = () => {

  const GameContext = useContext(GameGlobalContext)
  const {game,AddGame,ClearGame,AddGame2,SetCurrent1,SetCurrent2,ClearCurrent1,ClearCurrent2,current1,current2,ClearError,AddTeamToTheGame} = GameContext
  const TeamContext = useContext(TeamGlobalContext)
  const {teams,GetTeams,} = TeamContext
  const StadiumContext = useContext(StadiumGlobalContext)
  const {stadiums,GetStadiums} = StadiumContext
  const [gameSt, setGameSt] = useState({"id":'',"gameIdentifier":'',"tickets":[],"teams":[],"deadLine":''})
  
  useEffect(() => {
    ClearError()
    GetStadiums()
    GetTeams()
  }, [])
  var deadLine = ""
  var team1Id = ""
  var team2Id = ""

  const onSubmitHandler =(e)=>{
    e.preventDefault();
    AddGame({})
    document.getElementById("firstForm").style.display="none"
    document.getElementById("secondForm").style.display="block"
  }

  const onChangeTeam =(e)=>{
  
    team1Id=e.target.value
    console.log(e.target.value)
    
  }
  const onChangeTeam2 =(e)=>{
    
    team2Id=e.target.value
    console.log(e.target.value)
    
    
  }
  const onSubmitHandler1 =(e)=>{
    e.preventDefault();
    console.log(game.id)
    AddTeamToTheGame(game.id,team1Id);
    AddTeamToTheGame(game.id,team2Id);
    
    console.log({
      "id":game.id,
      "gameIdentifier":Math.floor(Math.random() * (999999999999999999 - 1) ) + 1,
      "teams": [],
      "tickets": [],
      "deadLine": deadLine
    })
    AddGame2({
      "id":game.id,
      "gameIdentifier":Math.floor(Math.random() * (999999999999999999 - 1) ) + 1,
      "teams": [],
      "tickets": [],
      "deadLine": deadLine
    })
    ClearCurrent1()
    ClearCurrent2()
    document.getElementById("firstForm").style.display="block"
    document.getElementById("secondForm").style.display="none"
    ClearGame()
  }


    //var gameIdentifier = Math.floor(Math.random() * (999999999999999999 - 1) ) + 1




    return (
        
        <div className='container'>
        
        <form onSubmit={onSubmitHandler} id='firstForm' style={{textAlign:"center",display:'block'}}>
        <br />
        <br />
        <br />
        <br />
          <h1>AddGame</h1>
          <br />
        <button type="submit" className="btn btn-primary">Next</button>









        </form>


        <form id='secondForm' style={{display:'none'}} onSubmit={onSubmitHandler1}>
        <h1>AddGame</h1>
        
        <div className="row">
          <div className="col-sm-6">
          <div className="form-group">
      <label>Host Team</label>
      <select required className="form-control" onChange={onChangeTeam} >
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
      <select required className="form-control" onChange={onChangeTeam2}>
      <option value="" hidden> 
          Select Guest team 
      </option> 
      {teams.map((team)=>team.name === current1 ? null : <option key={team.id} value={team.id}>{team.name}</option>)}
      </select>
    </div>
     </div>

          
        </div>
        
    <div className="form-group">
      <label>Stadium</label>
      <select required className="form-control">
      <option value="" hidden> 
          Select Stadium
      </option> 
       {stadiums.map((stadium)=><option key={stadium.stadiumId} value={stadium.name}>{stadium.name}</option>)}
      </select>
    </div>

    <div className="form-group">
      <label>Game DeadLine</label>
      <input type="datetime-local" className="form-control" placeholder="Stadium" onChange={(e)=>{deadLine=e.target.value; console.log(deadLine)}}  required />
      <small> example : 12/31/1997 10:10 AM </small>
    </div>
  


      <button type="submit" className="btn btn-primary" style={{float:'right'}}>Add Game</button>



        </form>

        

        </div>
        
    )
}

export default AddGame
