import React, { Fragment, useContext } from 'react';
import { UserGlobalContext } from '../../../../contexts/UserContext/UserGlobalState';

const UserTableRow = ({ user }) => {
  const context = useContext(UserGlobalContext);

  const editHandler = () => {
    context.SetCurrentUser(user);
  };
  const deleteHandler = () => {
    context.DeleteUser(user.userId);
  };

  return (
    <Fragment>
      <tr>
        <td>{user.userId}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
          <button>
            {' '}
            <i
              className='fa fa-pencil'
              aria-hidden='true'
              onClick={editHandler}
            ></i>
          </button>
          <button>
            <i
              className='fa fa-trash'
              aria-hidden='true'
              onClick={deleteHandler}
            ></i>
          </button>
        </td>
      </tr>
    </Fragment>
  );
};

export default UserTableRow;
