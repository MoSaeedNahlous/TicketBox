import React from 'react'

const Footer = () => {
    return (
        
<footer className="  page-footer font-small fluid full-width bg-dark-gray" style={{backgroundColor:'#494E53' ,color :'white' ,width:'100%'}}>
 
<div className="container-fluid">
      <div className="row mt3 full-width">
        <div className="col-md-4">
          <h5 className="font-weight-bold text-uppercase mt3  " style={{color:'white',marginLeft:'5%',marginTop:'3.2%'}}>Footer Content</h5>
        </div>
        <div className="col-md-4">
        <h5 className="font-weight-bold text-uppercase mt-3 mb-4" style={{color:'white'}}>Links</h5>
        </div>
        <div className="col-md-4">
        <h5 className="font-weight-bold text-uppercase mt-3 mb-4" style={{color:'white'}}>Links</h5>
        </div>

      </div>


       

      <div className="row">

      <div className="col-md-4 ">
      
        <p style={{color:'white',marginLeft:'5%'}}>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
          consectetur
          adipisicing elit.</p>
        </div>
        <div className="col-md-4">
        

        <ul className="list-unstyled">
          <li >
            <a href="#!" ><i className="fab fa-facebook-square fa-2x" style={{color:'#4267B2'}}/></a>
          </li>
          <li>
            <a href="#!"><i className="fab fa-twitter-square fa-2x" style={{color:'#1DA1F2'}} /></a>
          </li>
          <li>
            <a href="#!" ><i className="fab fa-instagram-square fa-2x" style={{color:'#C5346D'}} /></a>
          </li>
          <li>
            <a href="#!" ><i className="fab fa-github-square fa-2x" style={{color:'black'}} /></a>
          </li>
        </ul>

      </div>
      <div className="col-md-4">
      <ul className="list-unstyled">
          <li>
            <a href="#!" ><i className="fab fa-google-plus-square fa-2x" style={{color:'#DD4D40'}}/></a>
          </li>
          <li>
            <a href="#!"><i className="fab fa-linkedin fa-2x" style={{color:'#0077B5'}}/></a>
          </li>
          <li>
            <a href="#!"><i className="fab fa-snapchat-square fa-2x" style={{color:'#FFFC00'}} /></a>
          </li>
          <li>
            <a href="#!" ><i className="fas fa-headset fa-2x" style={{color:'white'}}/></a>
          </li>
        </ul>
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
