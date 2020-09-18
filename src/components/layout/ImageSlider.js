import React from 'react';
import download12 from '../../res/s1.jpg';
import download13 from '../../res/s2.jpg';
import download14 from '../../res/s3.jpg';
import hutteen from '../../res/Hutteen.jpg';
import tishreen from '../../res/Tishreen.jpg';
import covid from '../../res/covid.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageSlider = () => {
  return (
    <Carousel
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      useKeyboardArrows={true}
      stopOnHover={true}
      emulateTouch={true}
      dynamicHeight={true}
      className='style'
    >
      <div>
        <img src={download12} alt='img1' />
      </div>
      <div>
        <img src={download13} alt='img2' />
      </div>
      <div>
        <img src={download14} alt='img3' />
      </div>
      <div>
        <img src={hutteen} alt='img4' />
      </div>
      <div>
        <img src={tishreen} alt='img5' />
      </div>
      <div>
        <img src={covid} alt='img6' />
      </div>
    </Carousel>
  );
};

export default ImageSlider;
