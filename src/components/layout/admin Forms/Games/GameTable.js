import React, { useEffect, Fragment } from 'react'
import GameTableRow from './GameTableRow'
import { useContext } from 'react'
import {GameGlobalContext} from '../../../../contexts/gameContext/GameGlobalState'

const GameTable = () => {
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
      <th scope="col">ID</th>
      <th scope="col">Host Team</th>
      <th scope="col">Guest Team</th>
      <th scope="col">Stadium</th>
      <th scope="col">DeadLine</th>
      <th scope="col">Create Time</th>
      <th scope="col">Last Update Time</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {context.games.filter(game => game.teams.length !== 0 || game.stadium !== null).map((Game) => <GameTableRow key={Game.id} Game={Game} Host={Game.teams[0]}
    Guest={Game.teams[1]} Stad={Game.stadium}/>)}
  </tbody>
</table>
</Fragment>
        
    )
}

export default GameTable