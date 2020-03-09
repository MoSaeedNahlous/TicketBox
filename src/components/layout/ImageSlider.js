import React from "react";
import download12 from "../../res/k.jpg";
import download13 from "../../res/k2.jpg";
import download14 from "../../res/k1.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = () => {
  return (
    <Carousel
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      useKeyboardArrows={true}
      stopOnHover={true}
      dynamicHeight={true}
      emulateTouch={true}
    >
      <div>
        <img src={download12} alt="img1" />
      </div>
      <div>
        <img src={download12} alt="img2" />
      </div>
      <div>
        <img src={download12} alt="img3" />
      </div>
    </Carousel>
  );
};

export default ImageSlider;
