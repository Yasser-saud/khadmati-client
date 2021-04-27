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
      if (res.status === 200) {
        return { redirect: { permanent: false, destination: '/' } };
      }
    } catch (error) {
      return { props: {} };
    }
  };
}

export function profileProtect() {
  return async (ctx) => {
    const headers = ctx.req?.headers;

    try {
      const res = await axios({
        method: 'GET',
        url: URL,
        headers,
      });
      if (res.status === 200) {
        return { props: {} };
      }
    } catch (error) {
      return { redirect: { permanent: false, destination: '/login' } };
    }
  };
}
