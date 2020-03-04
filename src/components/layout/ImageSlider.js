import React from "react";
import download12 from "../card/k.jpg";
import download13 from "../card/k2.jpg";
import download14 from "../card/k1.jpg";
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
      dynamicHeight={true} //the most important one//
      emulateTouch={true}
    >
      <div>
        <img src={download12} />
      </div>
      <div>
        <img src={download13} />
      </div>
      <div>
        <img src={download14} />
      </div>
    </Carousel>
  );
};

export default ImageSlider;
