import React from 'react'
import EmpTableRow from './EmpTableRow'

const EmpTable = ({emps}) => {
    return (
        <div className='container'>
        <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Type</th>
      <th scope="col">Email</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {emps.map((emp) =><EmpTableRow key={emp.empId} emp={emp} />)}
  </tbody>
</table>
        </div>
    )
}

export default EmpTable