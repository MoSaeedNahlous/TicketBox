import React,{ useContext,useState,useEffect } from 'react'
import {GameGlobalContext} from '../../../../contexts/gameContext/GameGlobalState'
import {TeamGlobalContext} from '../../../../contexts/teamContext/TeamGlobalState'
import {StadiumGlobalContext} from '../../../../contexts/stadiumContext/StadiumGlobalState'
import GameTable from './GameTable'


const EditGame = () => {

  const gmcontext = useContext(GameGlobalContext)
  const tmcontext = useContext(TeamGlobalContext)
  const stdcontext = useContext(StadiumGlobalContext)
  const {} = gmcontext
  const {} = tmcontext
  const {} = stdcontext




  useEffect(() => {
   
  }, [])

  


  return(
    <div className='container'>
      
    <form id="form1">
        <h1>Edit Game</h1>
        
        <div className="row">
          <div className="col-sm-6">
          <div className="form-group">
      <label>Host Team</label>
      <select required className="form-control" name="host" id="host" required>
      <option value="" hidden> 
          Select Host team 
      </option> 
      {/* {teams.map((team)=><option key={team.id} value={team.id}>{team.name}</option>)} */}
      </select>

    
    </div>
     </div>
          <div className="col-sm-6">
          <div className="form-group">
      <label>Guest Team</label>
      <select required className="form-control" name="guest" id="guest"required>
      <option value="" hidden> 
          Select Guest team 
      </option> 
      {/* {teams.map((team)=><option key={team.id} value={team.id} >{team.name}</option>)} */}
      </select>

    </div>
     </div>

          
        </div>
        
    <div className="form-group">
      <label>Stadium</label>
      <select className="form-control" name="stadium" id="stadium" required>
      <option value="" hidden> 
          Select Stadium
      </option> 
      {/* {stadiums.map((stadium)=><option key={stadium.stadiumId} value={stadium.stadiumId}>{stadium.name}</option>)} */}
      </select>
    </div>

    <div className="form-group">
      <label>Game DeadLine</label>
      <input type="text" className="form-control" placeholder="day/month/year hour:minutes" name="deadLine" id="deadLine" required/>
      <small> example : 31/12/1997 13:10 </small>
    </div>
  

      <small id="small"></small>
      <button type="submit" className="btn btn-primary" id="btn" style={{float:'right'}}>Update Game</button>



        </form>
        

<br />
    <GameTable />









    </div>

  )

 
     

  }

export default EditGame
  
