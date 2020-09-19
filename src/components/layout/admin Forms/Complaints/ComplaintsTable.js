import React from 'react';
import ComplaintsTableRow from './ComplaintsTableRow';

const ComplaintsTable = ({ Complaints }) => {
  return (
    <div className='container'>
      <table className='table'>
        <thead className='thead-dark'>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>Email</th>
            <th scope='col'>Subject</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Complaints.map((complaint) => (
            <ComplaintsTableRow key={complaint.id} complaint={complaint} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComplaintsTable;
