import React, { Fragment, useContext } from 'react';
import { TestGlobalContext } from '../../../../contexts/testContext/TestGlobalState';

const ComplaintsTableRow = ({ complaint }) => {
  const context = useContext(TestGlobalContext);

  const deleteComplaint = () => {
    context.DeleteComplaint(complaint.id);
    context.ClearCurrent();
  };

  const viewComplaint = () => {
    context.SetCurrent(complaint);
  };
  return (
    <Fragment>
      <tr>
        <td>{complaint.id}</td>
        <td>{complaint.email}</td>
        <td>{complaint.subject}</td>

        <td>
          <button onClick={viewComplaint}>
            {' '}
            <i className='fa fa-eye' aria-hidden='true'></i>
          </button>
          <button onClick={deleteComplaint}>
            <i className='fa fa-trash' aria-hidden='true'></i>
          </button>
        </td>
      </tr>
    </Fragment>
  );
};

export default ComplaintsTableRow;
