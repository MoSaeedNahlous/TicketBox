import React, { Fragment, useEffect } from 'react'
import { useContext } from 'react'
import { GameGlobalContext } from '../../../../contexts/gameContext/GameGlobalState'
import TicketsTableRow from './TicketsTableRow'

const TicketsTable = () => {

    const context = useContext(GameGlobalContext)
    useEffect(() => {
        context.GetGames()
    }, [])

    return (
        <Fragment>
          <br />
        <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">GameID</th>
      <th scope="col">Host Team</th>
      <th scope="col">Guest Team</th>
      <th scope="col">Stadium</th>
      <th scope="col">DeadLine</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {context.games.filter(game => game.stadium !== null).map((Game) => <TicketsTableRow key={Game.id} Game={Game}  Stad={Game.stadium}/>)}
  </tbody>
</table>
</Fragment>
    )
}

export default TicketsTable
