import React from 'react'
import download from '../card/download.jpg'
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const ImageSlider = () => {
  return (
    <Carousel>
                <div>
                    <img src={download} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={download} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={download} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
  )
}

export default ImageSlider
