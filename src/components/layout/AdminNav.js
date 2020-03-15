import React,{ useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

const AdminNav = () => {

  useEffect(() => {
    Axios.get("http://localhost:8080/api/users/count").then(
      (res) =>{setUsersCount(res.data)}
    ).catch(err =>{alert(err)});
  }, [])


  const [usersCount, setUsersCount] = useState('')

    return (
        
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link to='/admin'> <label className="navbar-brand" style={{fontSize:'25px'}} >Admin Actions</label></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Employees Actions
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link className="dropdown-item" to='/admin/addEmp' >Add Employee</Link>
          <Link className="dropdown-item" to='/admin/deleteEmp'>Delete Employee</Link>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Users Actions
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link className="dropdown-item" to='/admin/deleteUser'>Delete User</Link>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Games Actions
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link className="dropdown-item" to='/admin/addGame'>Add Game</Link>
          <Link className="dropdown-item" to='/admin/deleteGame'>Delete Game</Link>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Tickets Actions
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link className="dropdown-item" to='/admin/addTicket'>Add Ticket</Link>
          <Link className="dropdown-item" to='/admin/deleteTicket'>Delete Ticket</Link>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Stadiums Actions
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link className="dropdown-item" to='/admin/addStadium'>Add Stadium</Link>
          <Link className="dropdown-item" to='/admin/deleteStadium'>Delete Stadium</Link>
        </div>
      </li>
      
      
    </ul>
  </div>
</nav>
     
    )
}

export default AdminNav
