import React, { Fragment, useContext, useEffect } from 'react';
import { TestGlobalContext } from '../../contexts/testContext/TestGlobalState';
import NavBar from './NavBar';
import Ticket from './Ticket';
import bg from '../../res/Page-Turner.svg';
import Footer from './Footer';

const UserTickets = () => {
  const context = useContext(TestGlobalContext);
  useEffect(() => {
    // context.LoadUser();
  }, []);
  var url = 'data:image/jpeg;base64,';

  return (
    <div>
      <NavBar className='no-printme' />
      <div
        style={{
          color: 'black',
          paddingBottom: '20%',
        }}
      >
        <div className='container'>
          <div className='MyCards'>
            <h1
              className='no-printme'
              style={{ textAlign: 'center', paddingTop: '6%' }}
            >
              My Tickets
            </h1>
            <br />
            {context.tickets.map((tkt) => {
              return <Ticket ticket={tkt} key={tkt.QrImage} />;
            })}
          </div>
        </div>
      </div>
      <Footer className='no-printme' />
    </div>
  );
};

export default UserTickets;
