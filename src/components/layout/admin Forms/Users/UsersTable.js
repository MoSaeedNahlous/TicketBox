import React from 'react';
import UserTableRow from './UserTableRow';
import { useContext } from 'react';
import { UserGlobalContext } from '../../../../contexts/UserContext/UserGlobalState';
import { useEffect } from 'react';

const UsersTable = () => {
  const context = useContext(UserGlobalContext);
  useEffect(() => {
    context.GetUsers();
  }, []);
  return (
    <div className='container'>
      <table className='table'>
        <thead className='thead-dark'>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Age</th>
            <th scope='col'>Gender</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {context.users.map((user) => (
            <UserTableRow key={user.userId} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
