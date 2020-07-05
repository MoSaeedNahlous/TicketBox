import React from 'react';
import Loader from 'react-loader-spinner';

const Spinner = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Loader type='Oval' color='grey' height={80} width={80} />
    </div>
  );
};
export default Spinner;
