import React from 'react'
import NavBar from '../layout/NavBar'
import Footer from '../layout/Footer'
import imag from '../../res/bghome.jpg'

const TermsAndConditions = () => {
    return (
        <div className='wite' style={{backgroundImage: `url(${imag})`,backgroundSize:'cover',backgroundRepeat:'repeat',backgroundPositionX:'75%'}}>
            <NavBar />
        <div className="container">
        <br />
            <h1 style={{textAlign:'center'}}>Terms and Conditions</h1>
            <br />
            <p style={{textAlign:'center'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero vero eveniet, cum expedita,
                 illo obcaecati eaque fugiat eos est deserunt rem maiores tenetur quae mollitia. Enim esse aut vel. Nostrum!
                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia provident praesentium dicta quas distinctio odio? Inve
                 ntore, soluta! Aut, repudiandae sapiente ut iste nemo nesciunt eveniet corrupti amet atque hic laudantium?
                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate optio ex quisquam et aliquam, blanditiis dolorum
                  distinctio assumenda perspiciatis rem cumque aut eaque temporibus voluptatem, ut a libero earum ratione?
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias maiores vero dolorum odio, placeat amet eos ut modi quibusdam itaque facere.
                  Vero quia iusto voluptas voluptatum eos voluptates. Expedita, praesentium!</p>
                  <br />
                 <ul>
                     <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, libero,
                          dignissimos neque soluta molestiae ex explicabo ipsam distinctio eveniet quibusdam voluptatem eum provident! Totam est eligendi voluptate eaque esse vel!</li>
                          <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, libero,
                          dignissimos neque soluta molestiae ex explicabo ipsam distinctio eveniet quibusdam voluptatem eum provident! Totam est eligendi voluptate eaque esse vel!</li>
                          <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, libero,
                          dignissimos neque soluta molestiae ex explicabo ipsam distinctio eveniet quibusdam voluptatem eum provident! Totam est eligendi voluptate eaque esse vel!</li>
                          <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, libero,
                          dignissimos neque soluta molestiae ex explicabo ipsam distinctio eveniet quibusdam voluptatem eum provident! Totam est eligendi voluptate eaque esse vel!</li>
                          <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, libero,
                          dignissimos neque soluta molestiae ex explicabo ipsam distinctio eveniet quibusdam voluptatem eum provident! Totam est eligendi voluptate eaque esse vel!</li>

                 </ul>
                 <br />
        </div>
        <Footer />
        </div>
    )
}

export default TermsAndConditions
