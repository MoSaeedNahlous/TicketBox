import React, { useEffect } from 'react'
import TicketsTable from './TicketsTable'
import GameTicketsTable from './GameTicketsTable'
import { useContext } from 'react'
import { GameGlobalContext } from '../../../../contexts/gameContext/GameGlobalState'

const EditTicket = () => {

  const context = useContext(GameGlobalContext)


  useEffect(() => {
    
  }, [])

  const closeModal=()=>{
    document.getElementById('viewModal').style.display='none'
  }
    return (
         <div style={{backgroundColor:'#F1F1F1'}}>
        <div className='container' >
          <br/>
        
  <h1>Edit Ticket</h1>
  <br/>
      <TicketsTable/>
      <br/>
      <br/>
      <GameTicketsTable />
      <div id='viewModal' style={{display:"block"}}>
        <div id='viewModalContent'>
        <span id="closeModal" onClick={closeModal} >&times;</span>
        <h1 style={{textAlign:"center"}}>Edit Tickets</h1>

        </div>
      </div>

 

        </div>
        
       </div>
    )
}

export default EditTicket
