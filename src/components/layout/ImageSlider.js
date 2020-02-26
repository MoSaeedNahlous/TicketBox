import React from 'react'
import download12 from '../card/k.jpg'
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const ImageSlider = () => {
  return (
    <Carousel showThumbs={false} infiniteLoop={true} width={'100%'} autoPlay={true}>
                <div>
                    <img src={download12} />
                    
                </div>
                <div>
                    <img src={download12} />
                    
                </div>
                <div>
                    <img src={download12} />
                    
                </div>
                
            </Carousel>
  )
}

export default ImageSlider
