import React from 'react';
import { Link } from 'react-router-dom';
import footerImg from '../../res/footer1.jpg';

const Footer = (props) => {
  const FooterStyle = {
    backgroundColor: '#0d0106',
    color: '#fbfbff',
    width: '100%',
    paddingTop: '5%',
  };

  Footer.defaultProps = {
    bg: { footerImg },
  };

  return (
    <footer
      className='  page-footer font-small fluid full-width'
      style={FooterStyle}
    >
      <h3
        style={{
          fontFamily: 'Krona One',
          textAlign: 'center',
          marginBottom: '3%',
          color: '#fbfbff',
        }}
      >
        FOLLOW US ON SOCIAL MEDIA
      </h3>
      <div
        className='row'
        style={{ width: '100%', margin: 'auto', textAlign: 'center' }}
      >
        <p style={{ textAlign: 'center', marginLeft: '33.8%' }}>
          <span>
            <a
              id='facebook'
              href='https://www.facebook.com/saeed.nahlous'
              target='_blank'
            >
              <i
                className='fa fa-2x fa-facebook footerIcon'
                id='facebook'
                aria-hidden='true'
                style={{ color: '#3b5998' }}
              />
            </a>
          </span>
          <span>
            <a
              href='https://www.instagram.com/saeednahlous/'
              id='facebook'
              target='_blank'
            >
              <i
                className='fa fa-2x fa-instagram footerIcon'
                aria-hidden='true'
                style={{ color: '#C62D88' }}
              ></i>
            </a>
          </span>
          <span>
            <i
              className='fa fa-2x fa-github-alt footerIcon'
              aria-hidden='true'
              style={{ color: '#fff' }}
            ></i>
          </span>
          <span>
            <a href='https://t.me/MoSaeedNahlous' id='facebook' target='_blank'>
              <i
                className='fa fa-2x fa-telegram footerIcon'
                aria-hidden='true'
                style={{ color: '#3f729b' }}
              ></i>
            </a>
          </span>
        </p>
      </div>
      <div
        className='row'
        style={{
          width: '100%',
          float: 'none',
          paddingLeft: '15%',
          paddingBottom: '5%',
        }}
      >
        <Link to='/aboutUs' style={{ color: '#FFFFEA', margin: '1%' }}>
          <h5 style={{}}>About us</h5>
        </Link>
        <Link
          to='/partnerAffiliation'
          style={{ color: '#FFFFEA', margin: '1%' }}
        >
          <h5 style={{}}>Partnership Affiliation</h5>
        </Link>
        <Link to='/CookiePolicy' style={{ color: '#FFFFEA', margin: '1%' }}>
          <h5 style={{}}>Cookies Policy</h5>
        </Link>
        <Link to='/ContactUs' style={{ color: '#FFFFEA', margin: '1%' }}>
          <h5 style={{}}>Contact Us</h5>
        </Link>
        <Link
          to='/TermsAndConditions'
          style={{ color: '#FFFFEA', margin: '1%' }}
        >
          <h5 style={{}}>Terms And Conditions</h5>
        </Link>
      </div>
      <h6
        style={{ paddingBottom: '3%', textAlign: 'center', marginBottom: '0' }}
      >
        CopyRights <i className='fa fa-copyright' aria-hidden='true'></i> 2020{' '}
      </h6>
    </footer>
  );
};

export default Footer;
