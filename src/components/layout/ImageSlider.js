import React from 'react';
import download12 from '../../res/syrr.jpeg';
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
        <img src={download12} height='380' alt='img1' />
      </div>
      <div>
        <img src={hutteen} height='380' alt='img4' />
      </div>
      <div>
        <img src={tishreen} height='380' alt='img5' />
      </div>
      <div>
        <img src={covid} height='380' alt='img6' />
      </div>
    </Carousel>
  );
};

export default ImageSlider;
