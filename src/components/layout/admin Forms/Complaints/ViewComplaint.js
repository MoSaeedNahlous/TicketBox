import React, { useContext, useEffect, useState } from 'react';
import { TestGlobalContext } from '../../../../contexts/testContext/TestGlobalState';
import ComplaintsTable from './ComplaintsTable';

const ViewComplaint = () => {
  const context = useContext(TestGlobalContext);
  useEffect(() => {
    context.GetComplaints();
  }, []);
  const [state, setState] = useState({ email: '', subject: '', message: '' });
  useEffect(() => {
    if (context.current !== null) {
      setState(context.current);
    } else {
      setState({ email: '', subject: '', message: '' });
    }
  }, [context.current]);
  return (
    <div>
      <div className='container'>
        <h2>Complaints</h2>
        <hr />
        <br />
        <div style={{ border: '1px solid black', margin: '10px' }}>
          <label>
            <strong>Email: </strong>
            {state.email}
          </label>
        </div>
        <br />
        <div style={{ border: '1px solid black', margin: '10px' }}>
          <label>
            <strong>Subject: </strong>
            {state.subject}
          </label>
        </div>
        <br />
        <div style={{ border: '1px solid black', margin: '10px' }}>
          <label>
            {' '}
            <strong>Message: </strong>
          </label>
          <br />
          <p>{state.message}</p>
        </div>
        <hr />
        <br />
        <ComplaintsTable Complaints={context.complaints} />
      </div>
    </div>
  );
};

export default ViewComplaint;
