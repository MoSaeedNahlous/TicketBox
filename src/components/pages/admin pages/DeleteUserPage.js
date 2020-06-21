import React, { useState, useEffect, Fragment } from 'react';
import DeleteUser from '../../layout/admin Forms/Users/DeleteUser';
import axios from 'axios';

import UsersTable from '../../layout/admin Forms/Users/UsersTable';
import AdminNav from '../../layout/AdminNav';

const DeleteUserPage = () => {
  return (
    <div>
      <AdminNav />
      <DeleteUser />
      <br />
      <UsersTable />
    </div>
  );
};

export default DeleteUserPage;
