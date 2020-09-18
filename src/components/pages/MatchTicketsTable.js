import React, { Fragment, useEffect } from 'react';
import { useContext } from 'react';
import { GameGlobalContext } from '../../contexts/gameContext/GameGlobalState';
import MatchTicketsTableRow from './MatchTicketsTableRow';

const MatchTicketsTable = ({ tickets }) => {
  return (
    <Fragment>
      <table className='table'>
        <thead className='thead-dark'>
          <tr style={{ textAlign: 'center' }}>
            <th scope='col'>Price</th>
            <th scope='col'>Gate</th>
            <th scope='col'>Amount</th>
            <th scope='col'>Returnable</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <MatchTicketsTableRow key={ticket.id} ticket={ticket} />
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default MatchTicketsTable;
