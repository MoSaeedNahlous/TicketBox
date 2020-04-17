import React,{ useContext,useState,useEffect } from 'react'
import {GameGlobalContext} from '../../../../contexts/gameContext/GameGlobalState'
import {TeamGlobalContext} from '../../../../contexts/teamContext/TeamGlobalState'
import {StadiumGlobalContext} from '../../../../contexts/stadiumContext/StadiumGlobalState'
import GameTable from './GameTable'


const EditGame = () => {

  const gmcontext = useContext(GameGlobalContext)
  const tmcontext = useContext(TeamGlobalContext)
  const stdcontext = useContext(StadiumGlobalContext)
  const {UpdateGameById,current3,ClearError,current1,current2,SetCurrent2,SetCurrent1,SetCurrent4,current4,DeleteTeamFromTheGame,AddTeamToTheGame} = gmcontext
  const {teams,GetTeams,GetTeamByID,GetTeamByID2,team,team2} = tmcontext
  const {stadiums,GetStadiums,GetStadiumByID} = stdcontext
  const [state, setState] = useState({"deadLine":'','id':'','stadium':'','teams':[],'tickets':[],'gameIdentifier':''})
  const [host,setHost] = useState({})
  const [guest,setGuest] = useState({})
  const [stad,setStad] = useState({})
  const [deadLine,setDeadline]= useState("")
 


  

  useEffect(() => {
    
    ClearError()
    GetTeams()
    GetStadiums()
    if(current3 !== null){
      setHost(current3.teams[0])
      setGuest(current3.teams[1])
      setStad(current3.stadium)
      setState(current3)
      
    }else{
      setState({"deadLine":'','id':'','stadium':{},'teams':[{},{}],'tickets':[],'gameIdentifier':''})
      setHost("")
      setGuest("")
      setStad("")
    }
  }, [current3])
  useEffect(() => {
    
    ClearError()
    GetTeams()
    GetStadiums()
    setStad(stdcontext.stadium)
    setHost(team)
    setGuest(team2)
    
  }, [team,team2,stdcontext.stadium])

  
  

  const onClick1Handler =(e)=>{
    e.preventDefault()
    document.getElementById('host').disabled=false;
    //DeleteTeamFromTheGame(state.id,document.getElementById('host').value)
    document.getElementById('host').value=""
  }
  const onClick2Handler =(e)=>{
    e.preventDefault()
    document.getElementById('guest').disabled=false;
    //DeleteTeamFromTheGame(state.id,document.getElementById('guest').value)
    document.getElementById('guest').value=""
  }
  const onChangeHost =(e)=>{
    e.preventDefault()
    setHost(e.target.value)
    GetTeamByID(e.target.value)
    setState({...state,teams:[team,state.teams[1]]})
    console.log(team);
    
  }
  const onChangeGuest =(e)=>{
    e.preventDefault()
    setGuest(e.target.value)
    GetTeamByID2(e.target.value)
    setState({...state,teams:[state.teams[0],team2]})
    console.log(team2);
  }
  const onChangeDeadLine =(e)=>{
    e.preventDefault()
    setState({...state,deadLine:e.target.value})
  }
  const onChangeStadium =(e)=>{
    e.preventDefault()
    setStad(e.target.value)
    GetStadiumByID(e.target.value)
    setState({...state,stadium:stdcontext.stadium})

  }
  
  const onSubmitHandler = e =>{
    e.preventDefault()
    
    
    
    var obj ={"deadLine":state.deadLine,'id':state.id,'stadium':stdcontext.stadium,'teams':[team,team2],'tickets':state.tickets,'gameIdentifier':state.gameIdentifier
    ,"createdAt":state.createdAt,"updatedAt":state.updatedAt}
    console.log("this should be the new game   "+JSON.stringify(obj));
    
    
    UpdateGameById(obj);
    
    

  }
  

  return(
    <div className='container'>
      
    <form onSubmit={onSubmitHandler}>
        <h1>Edit Game</h1>
        
        <div className="row">
          <div className="col-sm-6">
          <div className="form-group">
      <label>Host Team</label>
      <select required className="form-control" id='host' onChange={onChangeHost} value={host.id} disabled >
      <option value="" hidden> 
          Select Host team 
      </option> 
      {teams.map((team)=><option key={team.id} value={team.id}>{team.name}</option>)}
      </select>
    <button className="btn btn-dark" onClick={onClick1Handler} >Edit Host</button>
    
    </div>
     </div>
          <div className="col-sm-6">
          <div className="form-group">
      <label>Guest Team</label>
      <select required className="form-control" onChange={onChangeGuest} id='guest' value={guest.id} disabled>
      <option value="" hidden> 
          Select Guest team 
      </option> 
      {teams.map((team)=><option key={team.id} value={team.id} >{team.name}</option>)}
      </select>
      <button className="btn btn-dark" onClick={onClick2Handler} >Edit Guest</button>
    </div>
     </div>

          
        </div>
        
    <div className="form-group">
      <label>Stadium</label>
      <select required className="form-control" onChange={onChangeStadium} value={stad.stadiumId} >
      <option value="" hidden> 
          Select Stadium
      </option> 
      {stadiums.map((stadium)=><option key={stadium.stadiumId} value={stadium.stadiumId}>{stadium.name}</option>)}
      </select>
    </div>

    <div className="form-group">
      <label>Game DeadLine</label>
      <input type="text" className="form-control" placeholder="day/month/year hour:minutes" value={state.deadLine} onChange={onChangeDeadLine} required />
      <small> example : 31/12/1997 13:10 </small>
    </div>
  


      <button type="submit" className="btn btn-primary" style={{float:'right'}}>Update Game</button>



        </form>
        

<br />
    <GameTable />









    </div>

  )

 
     

  }

export default EditGame
  
