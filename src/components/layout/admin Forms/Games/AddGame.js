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
      
    }

    const submitForm=(e)=>{
      e.preventDefault();
      

    }

    const AddForm=()=>{
      var form =document.createElement("form");
      form.setAttribute("onSubmit","submitForm");
      form.setAttribute("style","margin-left:100px")

      var formGroup1=document.createElement("div")
      formGroup1.setAttribute("className","form-group")

      var formGroup2=document.createElement("div")
      formGroup2.setAttribute("className","form-group")

      var formGroup3=document.createElement("div")
      formGroup3.setAttribute("className","form-group")

      var formGroup4=document.createElement("div")
      formGroup4.setAttribute("className","form-group")

      var formGroup5=document.createElement("div")
      formGroup5.setAttribute("className","form-group")

      var formGroup6=document.createElement("div")
      formGroup6.setAttribute("className","form-group")


      var ticketsNumber=document.createElement("input")
      ticketsNumber.setAttribute("type","number")
      ticketsNumber.setAttribute("name","ticketsNumber")
      ticketsNumber.setAttribute("placeholder","ticketsNumber")
      ticketsNumber.required=true;

      var ticketsPrice=document.createElement("input")
      ticketsPrice.setAttribute("type","number")
      ticketsPrice.setAttribute("name","ticketsPrice")
      ticketsPrice.setAttribute("placeholder","ticketsPrice")
      ticketsPrice.required=true;

      var ticketsGate=document.createElement("input")
      ticketsGate.setAttribute("type","number")
      ticketsGate.setAttribute("name","ticketsGate")
      ticketsGate.setAttribute("placeholder","ticketsGate")
      ticketsGate.required=true;

      var ticketsDeadLine=document.createElement("input")
      ticketsDeadLine.setAttribute("type","text")
      ticketsDeadLine.setAttribute("name","ticketsDeadLine")
      ticketsDeadLine.setAttribute("placeholder","ticketsDeadLine")
      ticketsDeadLine.required=true;

      var ticketsReturn=document.createElement("input")
      ticketsReturn.setAttribute("type","text")
      ticketsReturn.setAttribute("name","ticketsReturn")
      ticketsReturn.setAttribute("placeholder","ticketsReturn")
      ticketsReturn.required=true;

      var submitTickets=document.createElement("button")
     submitTickets.setAttribute("type","submit")
     submitTickets.innerHTML="Submit Tickets"
     
      

      var brLine=document.createElement("hr")
      



      form.append(formGroup1);
      formGroup1.append(ticketsNumber);
      

      form.append(formGroup2);
      formGroup2.append(ticketsPrice);
      


      form.append(formGroup3);
      formGroup3.append(ticketsGate);
      


      form.append(formGroup4);
      formGroup4.append(ticketsDeadLine);
      


      form.append(formGroup5);
      formGroup5.append(ticketsReturn);

      form.append(formGroup6);
      formGroup6.append(submitTickets);
      
      form.append(brLine)

      
      
      
      
      

      document.getElementById("AddGameModalContent1").append(form);


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

    <div id="AddGameModal1" >
        <div id="AddGameModalContent1">
          <span id="closeModal">&times;</span>
          <br/>
          <button onClick={AddForm} className="btn btn-success" style={{textAlign:'center',margin:'auto'}}>Add Tickets</button>

      <br/>
      <br/>
      
      </div>
        

        </div>
        </div>
    )
}

export default AddGame
