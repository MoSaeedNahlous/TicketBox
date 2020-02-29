import React from 'react'
import NavBar from '../layout/NavBar'
import Footer from '../layout/Footer'
import imag from '../../images (2).png'

const About = () => {
    return (
        <div>
            <NavBar bg={imag}/>
        <div className="container">
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsum animi odit! Distinctio dolore ducimus,
                 dolores temporibus magnam veniam praesentium,
                 assumenda sunt, natus facere nulla corrupti ab. Molestiae, unde sequi!
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo minus asperiores labore esse.
                  Impedit iure architecto iste minima ullam molestias!
                   Ducimus vitae aliquam rem unde velit? Consequatur voluptates deleniti magnam.</p>
        </div>
        <Footer bg={imag}/>
        </div>
    )
}

export default About
