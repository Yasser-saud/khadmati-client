import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { useSelector } from 'react-redux';
import { userSelector } from '../store/user';
import styled from 'styled-components';

const withAuthentication = (WrappedComponent, privateRoute, publicRoute) => {
  const RequiresAuthentication = (props) => {
    // get user role from redux state
    const { isAuthenticated } = useSelector(userSelector);

    useEffect(() => {
      if (!isAuthenticated && privateRoute) {
        Router.push('/login');
      }
      if (isAuthenticated && publicRoute) {
        Router.push('/');
      }
    }, [isAuthenticated]);

    // if there's a loggedInUser, show the wrapped page, otherwise show a loading indicator

    if (isAuthenticated && privateRoute) {
      return (
        <>
          <WrappedComponent {...props} />
        </>
      );
    } else if (!isAuthenticated && publicRoute) {
      return <WrappedComponent {...props} />;
    }
    return <Loading>Loading....</Loading>;
  };

  return RequiresAuthentication;
};

withAuthentication.propTypes = {
  WrappedComponent: PropTypes.node.isRequired,
};

const Loading = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background: black;
  z-index: 100000;
`;
export default withAuthentication;
