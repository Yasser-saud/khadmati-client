import Login from '../components/login';
import axios from 'axios';

const login = () => {
  return <Login />;
};

export const getServerSideProps = async (ctx) => {
  const cookie = ctx.req?.headers.cookie;

  const res = await fetch('http://localhost:5000/api/user/get-user', {
    method: 'GET',
    headers: {
      cookie,
    },
  });

  if (res.status === 200 && ctx.req) {
    return { redirect: { permanent: false, destination: '/' } };
  }
  return { props: {} };
};

export default login;
