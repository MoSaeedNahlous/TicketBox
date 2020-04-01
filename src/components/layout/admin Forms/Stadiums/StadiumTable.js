import React from 'react'
import StadiumTableRow from './StadiumTableRow'

const StadiumTable = ({stadiums}) => {

    return (
        <div className='container'>
        <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">City</th>
      <th scope="col">Capacity</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {stadiums.map((Stadium) =><StadiumTableRow key={Stadium.stadiumId} Stadium={Stadium} />)}
  </tbody>
</table>
        </div>
    )
}

export default StadiumTable