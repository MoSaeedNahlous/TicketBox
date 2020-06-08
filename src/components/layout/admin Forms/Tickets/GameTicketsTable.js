import React, { Fragment, useContext } from 'react'
import { GameGlobalContext } from '../../../../contexts/gameContext/GameGlobalState'
import GameTicketsTableRow from './GameTicketsTableRow'

const GameTicketsTable = () => {

    const context = useContext(GameGlobalContext)
    return (
        <Fragment>
          <br />
        <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">TktID</th>
      <th scope="col">Counter</th>
      <th scope="col">Price</th>
      <th scope="col">Gates</th>
      <th scope="col">EndDate</th>
      <th scope="col">Returnable</th>
      <th scope="col">ReturnDateLimit</th>
      <th scope="col">CreatedAt</th>
      <th scope="col">UpdatedAt</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {context.tickets.map( (ticket)=> <GameTicketsTableRow Ticket={ticket} key={ticket.id} />)}
    
  </tbody>
</table>

</Fragment>
    )
}

export default GameTicketsTable
