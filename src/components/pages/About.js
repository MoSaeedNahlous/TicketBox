import React from 'react';
import NavBar from '../layout/NavBar';
import Footer from '../layout/Footer';
import imag from '../../res/bghome.jpg';

const About = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${imag})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
        backgroundPositionX: '75%',
      }}
    >
      <NavBar />
      <div className='container wite' style={{ textAlign: 'center' }}>
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsum
          animi odit! Distinctio dolore ducimus, dolores temporibus magnam
          veniam praesentium, assumenda sunt, natus facere nulla corrupti ab.
          Molestiae, unde sequi! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quo minus asperiores labore esse. Impedit iure
          architecto iste minima ullam molestias! Ducimus vitae aliquam rem unde
          velit? Consequatur voluptates deleniti magnam.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsum
          animi odit! Distinctio dolore ducimus, dolores temporibus magnam
          veniam praesentium, assumenda sunt, natus facere nulla corrupti ab.
          Molestiae, unde sequi! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quo minus asperiores labore esse. Impedit iure
          architecto iste minima ullam molestias! Ducimus vitae aliquam rem unde
          velit? Consequatur voluptates deleniti magnam.
        </p>
      </div>
      <br />
      <div className='row' style={{ width: '100%' }}>
        <div className='col-sm-4 wite' style={{ textAlign: 'center' }}>
          <h3>title</h3>
          <p>
            Lorem ipsum dolor sit amet consecteexercitationem, hic quas ad
            molestiae minus? hic quas ad molestiae minus? hic quas ad molestiae
            minus?
          </p>
        </div>
        <div className='col-sm-4 wite' style={{ textAlign: 'center' }}>
          <h3>title</h3>
          <p>
            Lorem ipsum dolor sit amet consecteexercitationem, hic quas ad
            molestiae minus? hic quas ad molestiae minus? hic quas ad molestiae
            minus?
          </p>
        </div>
        <div className='col-sm-4 wite' style={{ textAlign: 'center' }}>
          <h3>title</h3>
          <p>
            Lorem ipsum dolor sit amet consecteexercitationem, hic quas ad
            molestiae minus? hic quas ad molestiae minus? hic quas ad molestiae
            minus?
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
