import React from 'react';

const Specs = () => {
  return (
    <div>
      <div
        className='row'
        style={{ width: '100%', padding: '0', marginBottom: '6%', margin: '0' }}
      >
        <div
          className='col-sm-2 specDiv'
          style={{
            borderColor: 'grey',
            borderWidth: '0px 0px 0px 3px',
            borderStyle: 'solid',
          }}
        >
          <strong style={{ textAlign: 'center', marginTop: '5%' }}>
            <i className='fas fa-certificate' /> Warranty 100%
          </strong>
        </div>

        <div
          className='col-sm-2 specDiv'
          style={{
            borderColor: 'grey',
            borderWidth: '0px 0px 0px 3px',
            borderStyle: 'solid',
          }}
        >
          <strong style={{ textAlign: 'center', marginTop: '5%' }}>
            <i className='fas fa-money-bill-wave' /> Competitive Prices
          </strong>
        </div>

        <div
          className='col-sm-2 specDiv'
          style={{
            borderColor: 'grey',
            borderWidth: '0px 0px 0px 3px',
            borderStyle: 'solid',
          }}
        >
          <strong style={{ textAlign: 'center', marginTop: '5%' }}>
            <i className='fas fa-user-shield' /> Secure Transactions
          </strong>
        </div>

        <div
          className='col-sm-2 specDiv'
          style={{
            borderColor: 'grey',
            borderWidth: '0px 0px 0px 3px',
            borderStyle: 'solid',
          }}
        >
          <strong style={{ textAlign: 'center', marginTop: '5%' }}>
            <i className='far fa-clock' /> Always deliver on time
          </strong>
        </div>

        <div
          className='col-sm-2 specDiv'
          style={{
            borderColor: 'grey',
            borderWidth: '0px 0px 0px 3px',
            borderStyle: 'solid',
          }}
        >
          <strong style={{ textAlign: 'center', marginTop: '5%' }}>
            <i className='fas fa-phone-volume' /> Customer Support
          </strong>
        </div>

        <div
          className='col-sm-2 specDiv'
          style={{
            borderColor: 'grey',
            borderWidth: '0px 0px 0px 3px',
            borderStyle: 'solid',
          }}
        >
          <strong style={{ textAlign: 'center', marginTop: '5%' }}>
            <i className='fas fa-bookmark' /> First in Syria
          </strong>
        </div>
      </div>
    </div>
  );
};

export default Specs;
