import React from 'react'
import NavBar from '../layout/NavBar'
import imag from '../../res/images (1).png'
import Footer from '../layout/Footer'
import WorkerCard from '../layout/WorkerCard'

const AboutUs = () => {
    return (
        <div>
            <NavBar bg={imag}/>
                 <WorkerCard />
        
        <Footer bg={imag}/>
        </div>
    )
}

export default AboutUs
