import React, { useEffect } from 'react'
import TeamTableRow from './TeamTableRow'
import { useContext } from 'react'
import {TeamGlobalContext} from '../../../../contexts/teamContext/TeamGlobalState'

const TeamTable = () => {
  const context = useContext(TeamGlobalContext)
  useEffect(() => {
    context.GetTeams()
    
  }, [])

    return (
        <div className='container'>
        <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Country</th>
      <th scope="col">City</th>
      <th scope="col">Logo</th>
      <th scope="col">Create Time</th>
      <th scope="col">Last Update Time</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {context.teams.map((Team1) =><TeamTableRow key={Team1.id} Team={Team1} />)}
  </tbody>
</table>
        </div>
    )
}

export default TeamTable