import React from 'react'

const NavBar = () =>{
    
        return (
           <nav className="navbar  bg-dark navbar-dark" style={{width:'100%'}}>
  <div>
  <h1 className="navbar-brand" >TicketBox</h1>
  <small className="navbar-brand"style={{fontSize:'12px'}} >for E-Booking services</small>
  </div>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>

 
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
    </ul>
  </div>
</nav>
        )
    
}

export default NavBar
