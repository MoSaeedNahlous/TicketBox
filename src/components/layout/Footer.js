import React from 'react'
import {Link} from 'react-router-dom'

const Footer = (props) => {
  const FooterStyle={backgroundColor:'#494E53' ,color :'white' ,width:'100%',backgroundImage:`url(${props.bg})`}
    return (
        
        
<footer className="  page-footer font-small fluid full-width bg-dark-gray" style={FooterStyle}>
 
<div className="container-fluid">
      <div className="row mt3 full-width">
        <div className="col-md-4" style={{color:'white'}}>
          <h5 className="font-weight-bold text-uppercase mt3  " style={{color:'white',marginLeft:'5%',marginTop:'3.2%'}}>Company Details</h5>
          <ul className="list-unstyled">
            <li><Link to='/about-us' style={{color:'white'}}><i className="fas fa-hand-point-right"/> About us</Link></li>
            <li><Link to='/contact-us' style={{color:'white'}}><i className="fas fa-hand-point-right"/ > Contact us</Link></li>
            <li><Link to='/partner-affiliation' style={{color:'white'}}><i className="fas fa-hand-point-right"/> Partnership/Affiliation</Link></li>
            <li><Link to='/terms-and-conditions' style={{color:'white'}}><i className="fas fa-hand-point-right"/> Terms and Conditions</Link></li>
            <li><Link to='/cookie-policy' style={{color:'white'}}><i className="fas fa-hand-point-right"/> Cookie Policy</Link></li>
          </ul>
        </div>
        <div className="col-md-4">
        <h5 className="font-weight-bold text-uppercase mt-3 mb-4" style={{color:'white'}}>Download our App</h5>
        <ul className="list-unstyled">
          <li>
        <button className="btn btn-outline-secondary" disabled><i className="fab fa-google-play fa-2x"/> Coming soon </button>
          </li>
          <br />
          <li>
        <button className="btn btn-outline-secondary " style={{paddingLeft:'19px'}} disabled><i className="fab fa-apple fa-2x" style={{marginLeftLeft:'10px'}}/>  Coming soon</button>
        </li>
        </ul>
         <ul className="list-unstyled">
          
        </ul>
        </div>
        <div className="col-md-4">
        <h5 className="font-weight-bold text-uppercase mt-3 mb-4" style={{color:'white'}}>Follow us</h5>
        <div className="row">
         
            <Link  style={{margin:'3%'}} ><i className="fab fa-facebook-square fa-2x" style={{color:'#4267B2'}}/></Link>
          
         
            <Link  style={{margin:'3%'}} ><i className="fab fa-twitter-square fa-2x" style={{color:'#1DA1F2'}} /></Link>
          
         
            <Link   style={{margin:'3%'}}><i className="fab fa-instagram-square fa-2x" style={{color:'#CF4468'}}/></Link>
          
         
            <Link  style={{margin:'3%'}} ><i className="fab fa-telegram fa-2x" style={{color:'#35ADE1'}}/></Link>
          
        </div>
        </div>

      </div>


       

      
  <hr />
      <div className="row">

        <div className="footer-copyright text-center py-1 col-md-6 " style={{color:'white'}}>
           © 2020 Copyright
    
  </div>
  
      </div>
  </div>
  
  
  

</footer>

    )
}

export default Footer
