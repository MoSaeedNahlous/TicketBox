import React from "react";
import { Link } from "react-router-dom";
import NavImg from "../../res/footer1.jpg";

const NavBar = props => {
  const NavStyle = {
    width: "100%",
    flexGrow: "1",
    backgroundImage: `url(${NavImg})`,
    backgroundColor: "#494E53",
    backgroundPosition: '50% 75%',
    backgroundSize:'cover'
    
  };

  return (
    <nav className="navbar navbar-dark" style={NavStyle}>
      <div>
        <Link to="/" className="navbar-brand" style={{ color: "white" }}>
          <i className="fas fa-ticket-alt" /> TicketBox
        </Link>
        <small
          className="navbar-brand"
          style={{ fontSize: "12px", color: "white" }}
        >
          for E-Booking Services
        </small>
      </div>

      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>

      <div
        style={{
          float: "right",
          display: "flex",
          alignItems: "stretch",
          justifyContent: "space-around"
        }}
      >
        <Link to="/login" className="navbar-brand" style={{ color: "White" }}>
          <i className="far fa-user" /> Login
        </Link>
        <Link
          to="/register"
          className="navbar-toggler"
          style={{
            float: "left",
            backgroundColor: "green",
            color: "white",
            paddingTop: "9px"
          }}
        >
          <i className="fas fa-plus" /> Join for free
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
          style={{}}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              {" "}
              <i className="fas fa-home" /> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin" className="nav-link">
              {" "}
              <i className="fas fa-home" /> Admin
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/About" className="nav-link">
              <i className="fas fa-info-circle" /> About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              {" "}
              <i className="far fa-user" /> Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link">
              <i className="fas fa-sign-in-alt" /> signup
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
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
