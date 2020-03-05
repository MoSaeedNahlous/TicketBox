import React, { Component } from "react";
import ImageSlider from "../layout/ImageSlider";
import Cards from "../../components/card/Cards";
import Navbar from "../layout/NavBar";
import NavImg from "../../res/download.png";
import Footer from "../layout/Footer";
import Specs from "../layout/Specs";
import ScrollButton from "../layout/ScrollButton";
class Home extends Component {
  render() {
    return (
      <div>
        <Navbar bg={NavImg} />
        <ImageSlider scrollStepInPx="1" delayInMs="16.66" />
        <Specs />
        <ScrollButton />
        <Cards />
        <Footer bg={NavImg} />
      </div>
    );
  }
}
export default Home;
