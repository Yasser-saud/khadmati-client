import axios from 'axios';

export function withAuthServerSideProps() {
  return async (ctx) => {
    const cookie = ctx.req?.headers.cookie;

    try {
      const res = await axios({
        method: 'GET',
        url: '/api/user/get-user',
        headers: {
          cookie,
        },
      });
      if (res.status === 200) {
        return { redirect: { permanent: false, destination: '/' } };
      }
    } catch (error) {
      console.log(error.response?.status);
      return { props: {} };
    }
  };
}
