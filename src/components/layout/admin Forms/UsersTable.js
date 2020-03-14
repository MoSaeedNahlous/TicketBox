import React from 'react'
import UserTableRow from './UserTableRow'

const UsersTable = ({users}) => {
    return (
        <div className='container'>
        <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {users.map((user) =><UserTableRow key={user.userId} user={user} />)}
  </tbody>
</table>
        </div>
    )
}

export default UsersTable
