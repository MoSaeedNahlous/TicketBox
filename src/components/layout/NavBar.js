import React from "react";
import { Link } from "react-router-dom";
import br from '../../res/br.jpg'


const NavBar = props => {
  const NavStyle = {
    width: "100%",
    flexGrow: "1",
    backgroundColor: "black",
    padding:'0',
    paddingRight:'1rem',paddingLeft:'1rem',lineHeight: '1.2'

  };

  return (
    <nav className="navbar navbar-dark" style={NavStyle}>
      <div>
        <Link to="/" className="navItem"  style={{fontSize:'1.3rem',textDecoration:'none'}} >
          <i className="fas fa-ticket-alt" /> TicketBox
        
        <small
        className="margin1"
          style={{ fontSize: "12px" }}
        >
          for E-Booking Services
        </small>
        </Link>
      </div>

      

      <div
        style={{
          float: "right",
          display: "flex",
          alignItems: "stretch",
          justifyContent: "space-around"
        }}
      >
      
        <Link to="/login" className='navItem links' style={{padding:'1.5rem'}} >
          <i className="far fa-user" /> Login
        </Link>
        

        
        <Link
          to="/register"
          className=" navItemAlt"
          style={{
            float: "left",
            lineHeight: '1.2',padding:'1.5rem'

          }}
        >
          <i className="fas fa-plus" /> Join for free
        </Link>
        

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
          style={{backgrounColor:"orange"}}
        >
          <span className="navbar-toggler-icon" style={{backgrounColor:'orange'}}></span>
        </button>
      </div>

      <div className="collapse navbar-collapse" id="collapsibleNavbar" style={{backgroundImage: `url(${br})`,backgroundRepeat:'noRepeat'
      ,backgroundSize:'cover',backgroundPosition:'00% 50%',padding:'0'}}>
        <ul className="navbar-nav">
          <li className=" menuItem">
            <Link to="/"   className=" menuItem">
              {" "}
              <i className="fas fa-home" /> Home
            </Link>
          </li>
          <li className="nav-item menuItem">
            <Link to="/admin"   className=" menuItem" >
              {" "}
              <i className="fas fa-home" /> Admin
            </Link>
          </li>
          <li className="nav-item menuItem">
            <Link to="/About"   className=" menuItem" >
              <i className="fas fa-info-circle" /> About
            </Link>
          </li>
          <li className="nav-item menuItem">
            <Link to="/login"    className=" menuItem">
              {" "}
              <i className="far fa-user" /> Login
            </Link>
          </li>
          <li className="nav-item menuItem">
            <Link to="/register"    className=" menuItem">
              <i className="fas fa-sign-in-alt" /> signup
            </Link>
          </li>
          <li className="nav-item menuItem">
            <Link to="/login"    className=" menuItem">
              {" "}
              <i className="fas fa-sign-out-alt" /> Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
