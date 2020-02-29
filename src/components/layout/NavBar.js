import React,{} from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) =>{
  

    const NavStyle={
      width:'100%',flexGrow:'1',backgroundImage:`url(${props.bg})`
    }
    return (
           <nav className="navbar navbar-dark" style={NavStyle}>
  <div>
  <Link to='/' className="navbar-brand" style={{color:'black'}} ><i className="fas fa-ticket-alt"/> TicketBox</Link>
  <small className="navbar-brand"style={{fontSize:'12px',color:'black'}} >for E-Booking Services</small>
  </div>
  
  <div style={{float:'right',display:'flex', alignItems:'stretch',justifyContent:'space-around'}}>
  <Link to='/login'className="navbar-brand" style={{color:'black'}} ><i className="far fa-user"/> Login</Link>
  <Link to='/signup' className="navbar-toggler" style={{color:'black',float:'left',backgroundColor:'green',color:'white',paddingTop:'9px'}}>
  <i className="fas fa-plus"/> Join for free</Link>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" style={{}}>
    <span className="navbar-toggler-icon"></span>
  </button></div>

 
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to='/' className="nav-link" > <i className="fas fa-home"/> Home</Link>
      </li>
      <li className="nav-item">
        <Link to='/About' className="nav-link" ><i className="fas fa-info-circle" />   About</Link>
      </li>
      <li className="nav-item">
        <Link to='/login' className="nav-link" > <i className="far fa-user"/> Login</Link>
      </li>
      <li className="nav-item">
        <Link to='/signup' className="nav-link" ><i className="fas fa-sign-in-alt"/> signup</Link>
      </li>
      <li className="nav-item">
        <Link to='/signup' className="nav-link" > <i className="fas fa-sign-out-alt"/> Logout</Link>
      </li>
    </ul>
  </div>
</nav>
        )
    
}

export default NavBar
