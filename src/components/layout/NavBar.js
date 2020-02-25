import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () =>{
    
    return (
           <nav className="navbar  bg-dark navbar-dark" style={{width:'100%',flexGrow:'1'}}>
  <div>
  <Link to='/' className="navbar-brand" >TicketBox</Link>
  <small className="navbar-brand"style={{fontSize:'12px'}} >for E-Booking services</small>
  </div>
  
  <div style={{float:'right',display:'flex', alignItems:'stretch',justifyContent:'space-around'}}>
  <Link to='/login'className="navbar-brand" >Login</Link>
  <Link to='/signup' className="navbar-toggler" style={{float:'left',backgroundColor:'green',color:'white',paddingTop:'9px'}}>
  Join for free</Link>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" style={{}}>
    <span className="navbar-toggler-icon"></span>
  </button></div>

 
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to='/' className="nav-link" >Home</Link>
      </li>
      <li className="nav-item">
        <Link to='/About' className="nav-link" >About</Link>
      </li>
      <li className="nav-item">
        <Link to='/' className="nav-link" >Home</Link>
      </li>
    </ul>
  </div>
</nav>
        )
    
}

export default NavBar
