import React from 'react';

const TicketPage = ({ match }) => {
  return (
    <div>
      <h1>{match.params.id}</h1>
    </div>
  );
};

export default TicketPage;
