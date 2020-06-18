import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import TicketsTable from './TicketsTable'
import { useContext } from 'react'
import { GameGlobalContext } from '../../../../contexts/gameContext/GameGlobalState'

const AddTicket = () => {
  const context = useContext(GameGlobalContext)

  useEffect(() => {
    context.ClearCurrent()
  }, [])

  useEffect(() => {
   
  }, [])

    return (
        <div className='container'>
        
          <h1>Add Ticket</h1>
          <TicketsTable />
          <hr/>
          <form >
            <h3>Ticket information</h3>
            <br/>
            <div className="form-group">
              <label>GameId</label>
              <input type="number" name="gameId" className="form-control" placeholder="GameId"  required/>
            </div>
            <div className="form-group">
              <label>Counter</label>
              <input type="number" name="counter" className="form-control" placeholder="Counter"  required/>
            </div>
            <div className="form-group">
              <label>Price</label>
              <input type="number" name="price" className="form-control" placeholder="Price"  required/>
            </div>
            <div className="form-group">
              <label>Gates</label>
              <input type="text" id="gates" name="gates" className="form-control" placeholder="Gates" required/>
            </div>
            <div className="form-group">
              <label>Release date</label>
              <input type="text" name="releaseDate" className="form-control" placeholder="Release Date ex: 5/5/2021"  required/>
            </div>
            <div className="form-group">
              <label>End date</label>
              <input type="text" name="endDate" className="form-control" placeholder="End Date ex: 5/5/2021"  required/>
            </div>
            <div className="form-group">
              
              <label>Returnable</label>
              
              <div className="btn-group btn-group-toggle" data-toggle="buttons" style={{marginLeft:'3%'}}>
  
              <label className="btn btn-secondary">
              <input type="radio" name="returnable" value="true"  required 
              /> Yes
              </label>

              <label className="btn btn-secondary">
              <input type="radio" name="returnable" value="false" 
               /> No
              </label>
              </div>
            </div>
            
            <div className="form-group">
              <label>Return date</label>
              <input type="text" name="returnDate"  id="returnDate" className="form-control" placeholder="Return Date" required/>
            </div>
            
            <div className="form-group">
              <button type="submit" className="btn btn-primary">Add Ticket</button>
            </div>

          </form>

        </div>
    )
}

export default AddTicket
