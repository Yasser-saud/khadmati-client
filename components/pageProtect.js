import axios from 'axios';

const URL = '/api/user/current-user';

export function withAuthServerSideProps() {
  return async (ctx) => {
    const cookie = ctx.req?.headers.cookie;

    try {
      const res = await axios({
        method: 'GET',
        url: URL,
        headers: {
          cookie,
        },
      });
      console.log(res);
      if (res.status === 200) {
        return { redirect: { permanent: false, destination: '/' } };
      }
    } catch (error) {
      console.log(error);
      return { props: {} };
    }
  };
}

export function profileProtect() {
  return async (ctx) => {
    const headers = ctx.req?.headers;

    try {
      const res = await axios.get('/api/user/current-user', { headers });
      console.log(res.status);
      if (res.status != 401) {
        return { props: { test: 'test' } };
      }
      console.log(res);
    } catch (error) {
      console.log(error);
      return { redirect: { permanent: false, destination: '/login' } };
    }
  };
}
