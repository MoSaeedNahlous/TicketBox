import React from 'react'
import NavBar from '../layout/NavBar'
import Footer from '../layout/Footer'
import imag from '../../res/bghome.jpg'

const PartnershipAffiliation = () => {
    return (
        <div className='wite'  style={{backgroundImage: `url(${imag})`,backgroundSize:'cover',backgroundRepeat:'repeat',backgroundPositionX:'75%'}}>
            <NavBar />
        <div className="container">
        <br />
            <h3>Partnership/Affiliation</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, dignissimos facilis minima natus tempora, eligendi libero fugiat fuga numquam corrupti magni maiores exercitationem laboriosam molestias ducimus obcaecati qui expedita! Tempore.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, dignissimos facilis minima natus tempora, eligendi libero fugiat fuga numquam corrupti magni maiores exercitationem laboriosam molestias ducimus obcaecati qui expedita! Tempore.</p>

        </div>
        <Footer />
        </div>
    )
}

export default PartnershipAffiliation
