import React from 'react';
import NavBar from '../layout/NavBar';
import Footer from '../layout/Footer';
import imag from '../../res/Page-Turner.svg';

const TermsAndConditions = () => {
  return (
    <div
      className='wite'
      style={{
        backgroundImage: `url(${imag})`,
        backgroundSize: 'cover',
        backgroundPositionX: '100%',
      }}
    >
      <NavBar />
      <div className='container'>
        <br />
        <h1 style={{ textAlign: 'center' }}>Terms and Conditions</h1>
        <br />
        <p style={{ textAlign: 'center', color: 'black' }}>
          These terms and conditions outline the rules and regulations for the
          use of TicketBox's Website, located at TicketBox.com. By accessing
          this website we assume you accept these terms and conditions. Do not
          continue to use TicketBox if you do not agree to take all of the terms
          and conditions stated on this page. Our Terms and Conditions were
          created with the help of the Terms And Conditions Generator and the
          Free Terms & Conditions Generator. The following terminology applies
          to these Terms and Conditions, Privacy Statement and Disclaimer Notice
          and all Agreements: "Client", "You" and "Your" refers to you, the
          person log on this website and compliant to the Company’s terms and
          conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers
          to our Company. "Party", "Parties", or "Us", refers to both the Client
          and ourselves. All terms refer to the offer, acceptance and
          consideration of payment necessary to undertake the process of our
          assistance to the Client in the most appropriate manner for the
          express purpose of meeting the Client’s needs in respect of provision
          of the Company’s stated services, in accordance with and subject to,
          prevailing law of Netherlands. Any use of the above terminology or
          other words in the singular, plural, capitalization and/or he/she or
          they, are taken as interchangeable and therefore as referring to same.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus labore
          id ut alias? Quas vitae similique, amet eligendi nesciunt dignissimos
          officiis totam voluptate, corrupti id consequuntur eos est suscipit
          saepe.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
