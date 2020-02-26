import React from 'react'

const ContactUs = () => {
    return (
        <div className="container">
            <br />
            <h1> Contact Us</h1>
            <ul className="list-unstyled">
            <br/>
                <li><i className="fab fa-telegram fa-2x" style={{color:'#35ADE1'}}> Telegram:</i></li>
                <br/>
                <li><i className="fab fa-facebook-square fa-2x" style={{color:'#4267B2'}}> Facebook:</i></li>
                <br/>
                <li><i className="fab fa-github-square fa-2x" style={{color:'#24292E'}}> Github:</i></li>
                <br/>
                <li><i className="fab fa-linkedin fa-2x" style={{color:'#0077B5'}}> LinkedIn:</i></li>
                <br/>
                <li><i className="fas fa-mobile-alt fa-2x" style={{color:'black'}}> Call & SMS:</i></li>
                <br/>
            </ul>
            <br />
        </div>
    )
}

export default ContactUs
