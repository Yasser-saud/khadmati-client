import React from 'react';
import Register from '../components/register';
import { withAuthServerSideProps } from '../components/pageProtect';

const register = () => {
  return <Register />;
};
export const getServerSideProps = withAuthServerSideProps();
export default register;
