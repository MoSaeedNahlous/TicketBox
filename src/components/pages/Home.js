import React from 'react'
import ImageSlider from '../layout/ImageSlider'
import Cards from '../card/Cards'
import Navbar from '../layout/NavBar'
import NavImg from '../../download.png'
import Footer from '../layout/Footer'

const Home = () => {
    return (
        <div>
            <Navbar bg={NavImg} />
            <ImageSlider />
            <Cards />
            <Footer bg={NavImg}/>
        </div>
    )
}

export default Home
