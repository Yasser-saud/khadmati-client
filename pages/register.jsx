import React from 'react';
import Register from '../components/register';
import { withAuthServerSideProps } from '../components/serverSideAuth';

const register = () => {
  return <Register />;
};
export const getServerSideProps = withAuthServerSideProps();
export default register;
