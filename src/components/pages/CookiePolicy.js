import React from 'react'
import NavBar from '../layout/NavBar'
import Footer from '../layout/Footer'
import imag from '../../res/bghome.jpg'


const CookiePolicy = () => {
    return (
        
        <div className='wite' style={{backgroundImage: `url(${imag})`,backgroundSize:'cover',backgroundRepeat:'repeat',backgroundPositionX:'75%'}}>
            <NavBar />
        <div className="container" style={{textAlign:"center"}}>
        <br />
        <h1><i className="fas fa-cookie" style={{color:'#FF922B'}}/> Cookie Policy <i className="fas fa-cookie" style={{color:'#FF922B'}}/></h1>
            <br />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, quidem consequatur. Magni quam quis in ipsam accusantium voluptatem, obcaecati eligendi deleniti asperiores, ab ullam reiciendis voluptatibus saepe praesentium nostrum quibusdam.</p>
            <br />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, quidem consequatur. Magni quam quis in ipsam accusantium voluptatem, obcaecati eligendi deleniti asperiores, ab ullam reiciendis voluptatibus saepe praesentium nostrum quibusdam.</p>
            <br />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, quidem consequatur. Magni quam quis in ipsam accusantium voluptatem, obcaecati eligendi deleniti asperiores, ab ullam reiciendis voluptatibus saepe praesentium nostrum quibusdam.</p>
            <br />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, quidem consequatur. Magni quam quis in ipsam accusantium voluptatem, obcaecati eligendi deleniti asperiores, ab ullam reiciendis voluptatibus saepe praesentium nostrum quibusdam.</p>
            <br />
            <br />
        </div>
        <Footer />
        </div>
       
    )
}

export default CookiePolicy
