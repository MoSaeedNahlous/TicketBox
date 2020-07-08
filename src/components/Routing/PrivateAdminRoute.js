import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import { UserGlobalContext } from '../../contexts/UserContext/UserGlobalState';

const PrivateUserRoute = ({ component: Component, ...rest }) => {
  const context = useContext(UserGlobalContext);
  const { isAuthenticated, isLoading, user } = context;
  return (
    <Route
      {...rest}
      render={(props) =>
        !localStorage.getItem('jwtToken') &&
        user.roles[0].name !== 'ROLE_ADMIN' ? (
          <Redirect to='/404' />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateUserRoute;
