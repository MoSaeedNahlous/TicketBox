import React from 'react'
import Signup from '../layout/SignUp'
import NavBar from '../layout/NavBar'
import Footer from '../layout/Footer'

const SignupPage = () => {
    return (
        <div> 
            <NavBar />
            <div className="container">
        <br />
            <Signup />
            <br />
            </div>
            <Footer />
        </div>
    )
}

export default SignupPage
