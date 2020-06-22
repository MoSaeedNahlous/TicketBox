import React, { useEffect } from 'react';
import StadiumTableRow from './StadiumTableRow';
import { useContext } from 'react';
import { StadiumGlobalContext } from '../../../../contexts/stadiumContext/StadiumGlobalState';

const StadiumTable = () => {
  const context = useContext(StadiumGlobalContext);
  useEffect(() => {
    context.GetStadiums();
  }, []);

  return (
    <div className='container'>
      <table className='table'>
        <thead className='thead-dark'>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>Name</th>
            <th scope='col'>City</th>
            <th scope='col'>Capacity</th>
            <th scope='col'>Gates</th>
            <th scope='col'>Image</th>
            <th scope='col'>Create Time</th>
            <th scope='col'>Last Update Time</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {context.stadiums.map((Stadium) => (
            <StadiumTableRow key={Stadium.stadiumId} Stadium={Stadium} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StadiumTable;
