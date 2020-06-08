import React,{useState,useContext, useEffect} from 'react'
import {GameGlobalContext} from '../../../../contexts/gameContext/GameGlobalState'
import {TeamGlobalContext} from '../../../../contexts/teamContext/TeamGlobalState'
import {StadiumGlobalContext} from '../../../../contexts/stadiumContext/StadiumGlobalState'
import { Prompt } from 'react-router-dom'
import { useRef } from 'react'


const AddGame = () => {

  const GameContext = useContext(GameGlobalContext)
  const TeamContext = useContext(TeamGlobalContext)
  const StadiumContext = useContext(StadiumGlobalContext)
  const {teams,GetTeams} = TeamContext
  const {stadiums,GetStadiums} = StadiumContext
  const [state, setState] = useState({"deadLine":"","host":"","guest":"","stadium":"","game":{}})
  const [ticketInfo, setTicketInfo] = useState({"counter":'',"releaseDate":'',"endDate":'',"price":'',"returnable":'',"returnDate":'',"gates":[],"ticketSequence":''})
  const first =useRef(false)
  var next = false


  useEffect(() => {
    GetStadiums()
    GetTeams()
    setState({...state,game:GameContext.game})
    
  }, [GameContext.game])

  useEffect(() => {
    first.current=false
   
  }, [])

  useEffect(() => {
    if (first.current) {
      window.onbeforeunload = () => true
    } else {
      window.onbeforeunload = undefined
    }
  }, [first.current])

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
    first.current=true
    document.getElementById("AddGameModal").style.display="block"
    console.log(first.current);
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
      document.getElementById("AddGameModal").style.display="none"
      first.current=false
      document.getElementById("AddGameModal1").style.display="block"

    }


    const closeModal=()=>{
      document.getElementById("AddGameModal").style.display="none"
      GameContext.DeleteGame(state.game.id);
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
      first.current=false
      GameContext.ClearCurrent1()
      GameContext.ClearCurrent2()
      
    }
    const closeModal1=()=>{
      document.getElementById("AddGameModal1").style.display="none"
      
      
    }

    const onChangeHandlerTkt=(e)=>{

      
      setTicketInfo({...ticketInfo,[e.target.name]:e.target.value})}

      const onBlurHandler =(e)=>{
        var str=e.target.value.split('')
        setTicketInfo({...ticketInfo,[e.target.name]:str})
      }
  
    const AddTkt =(e)=>{
        e.preventDefault()
        
        setTicketInfo({...ticketInfo,ticketSequence:(Math.floor(Math.random() * (99999999999999999999999999 - 1) ) + 1).toString()})
        console.log(ticketInfo)
        GameContext.AddTicket(ticketInfo,GameContext.game.id);
        setTicketInfo({"counter":'',"releaseDate":'',"endDate":'',"price":'',"returnable":'',"returnDate":'',"gates":[],"ticketSequence":(Math.floor(Math.random() * (99999999999999999999999999 - 1) ) + 1).toString()})
        
        
    }

    const onChangeHandlerHost =(e)=>{
      setState({...state,[e.target.name]:e.target.value})
      GameContext.SetCurrent1(e.target.value)

    }
    const onChangeHandlerGuest =(e)=>{
      setState({...state,[e.target.name]:e.target.value})
      GameContext.SetCurrent2(e.target.value)

    }

    return (
        
        <div className='container'>
        <Prompt
      when={first.current}
      message={(location, action) => {
    if (action === 'POP') {
      console.log("Backing up...")
    }

    return location.pathname.startsWith("/app")
      ? true
      : `Are you sure you want to go to ${location.pathname}?`
  }}
      
    />


        
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

      <div id="AddGameModal" style={{"display":"none"}}>
        <div className="AddGameModalContent">
          <span id="closeModal" onClick={closeModal}>&times;</span>
          <br/>
        <form onSubmit={onSubmitHandler2} id="secondform" disabled>

        <div className="row">
          <div className="col-sm-6">
          <div className="form-group">
      <label>Host Team</label>
      <select required className="form-control"id='host' name="host" onChange={onChangeHandlerHost} disabled>
      <option value="" hidden> 
          Select Host team 
      </option> 
      {teams.map((team)=> team.id == GameContext.current2 ? null : <option key={team.id} value={team.id}>{team.name}</option> )}
      </select>
    </div>
    
     </div>
          <div className="col-sm-6">
          <div className="form-group">
      <label>Guest Team</label>
      <select required className="form-control" id='guest' name="guest" onChange={onChangeHandlerGuest} disabled>
      <option value="" hidden> 
          Select Guest team 
      </option> 
      {teams.map((team)=> team.id == GameContext.current1 ? null : <option key={team.id} value={team.id}>{team.name}</option> )}
      </select>
    </div>
     </div>

          
        </div>
        
    <div className="form-group">
      <label style={{"marginLeft":"5%"}}>Stadium</label>
      <select required className="form-control" id='stadium' name="stadium" style={{"width":"80%","marginLeft":"5%"}} onChange={onChangeHandler} disabled>
      <option value="" hidden> 
          Select Stadium
      </option> 
       {stadiums.map((stadium)=><option key={stadium.stadiumId} value={stadium.stadiumId}>{stadium.name}</option>)}
      </select>
    </div>
      <button type="submit"  id='bt2' className="btn btn-primary" style={{float:'right',"marginRight":"5%"}} disabled>AddGame</button>
      <br/>
      <br/>
      </form>
      </div>
    </div>


    <div id="AddGameModal1" name="ticketsModal" style={{display:"none"}}  >
        <div id="AddGameModalContent1">
          <span onClick={closeModal1} id="closeModal">&times;</span>
          <h2 style={{textAlign:'center'}}>Press Add Tickets to add Tickets to the New Game</h2>
          <br/>
          <form onSubmit={AddTkt} id="tktForm" style={{padding:'4%',display:"none"}}>
            <h3>Ticket information</h3>
            <br/>
            <div className="form-group">
              <label>Counter</label>
              <input type="number" name="counter" value={ticketInfo.counter} className="form-control" placeholder="Counter" onChange={onChangeHandlerTkt} required/>
            </div>
            <div className="form-group">
              <label>Price</label>
              <input type="number" name="price" value={ticketInfo.price} className="form-control" placeholder="Price" onChange={onChangeHandlerTkt} required/>
            </div>
            <div className="form-group">
              <label>Gates</label>
              <input type="text" id="gates" name="gates" value={ticketInfo.gates} className="form-control" placeholder="Gates"onChange={onChangeHandlerTkt} onBlur={onBlurHandler} required/>
            </div>
            <div className="form-group">
              <label>Release date</label>
              <input type="text" name="releaseDate" value={ticketInfo.releaseDate} className="form-control" placeholder="Release Date ex: 5/5/2021" onChange={onChangeHandlerTkt} required/>
            </div>
            <div className="form-group">
              <label>End date</label>
              <input type="text" name="endDate" value={ticketInfo.endDate} className="form-control" placeholder="End Date ex: 5/5/2021" onChange={onChangeHandlerTkt} required/>
            </div>
            <div className="form-group">
              
              <label>Returnable</label>
              
              <div className="btn-group btn-group-toggle" data-toggle="buttons" style={{marginLeft:'3%'}}>
  
              <label className="btn btn-secondary">
              <input type="radio" name="returnable" value="true"  required 
              onClick={()=>{setTicketInfo({...ticketInfo,returnable:true,ticketSequence:(Math.floor(Math.random() * (99999999999999999999999999 - 1) ) + 1).toString()});
                document.getElementById("returnDate").disabled=false}}/> Yes
              </label>

              <label className="btn btn-secondary">
              <input type="radio" name="returnable" value="false" 
              onClick={()=>{setTicketInfo({...ticketInfo,returnDate:"",returnable:false,ticketSequence:(Math.floor(Math.random() * (99999999999999999999999999999 - 1) ) + 1).toString()})
                document.getElementById("returnDate").disabled=true}} /> No
              </label>
              </div>
            </div>
            
            <div className="form-group">
              <label>Return date</label>
              <input type="text" name="returnDate" value={ticketInfo.returnDate} id="returnDate" className="form-control" placeholder="Return Date" onChange={onChangeHandlerTkt} required/>
            </div>
            
            <div className="form-group">
              <button type="submit" className="btn btn-primary">Add & continue</button>
            </div>

          </form>
          <button className="btn btn-success" id="plus" onClick={()=> {
            document.getElementById("plus").disabled=true;
            document.getElementById("tktForm").style.display="block"
            }} style={{textAlign:'center',margin:'auto'}}>Add Tickets</button>

      <br/>
      <br/>
      
      </div>
        

        </div>
    
        </div>
        
    )
}

export default AddGame
