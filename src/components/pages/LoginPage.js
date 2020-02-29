import React from 'react'
import Login from '../layout/Login'
import NavImg from '../../images.png'
import Navbar from '../layout/NavBar'
import Footer from '../layout/Footer'
const LoginPage = () => {
    return (
        <div>

        <Navbar bg={NavImg} />
            <Login />
            <Footer bg={NavImg} />
            
        </div>
    )
}

export default LoginPage
