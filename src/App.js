import React from 'react';
import './App.css';
import Navbar from './components/layout/NavBar.js'
import Cards from'./components/card/Cards'
import ImageSlider from './components/layout/ImageSlider'
import Footer from './components/layout/Footer'


const App =() => {
  return (
    <div className="App ">
     <Navbar />
     <div className="container">
       <ImageSlider />
      <Cards />
    
 
     
     </div>
    
     <Footer />
    </div>
  );
}

export default App;
