import Profile from '../components/profile';
import { profileProtect } from '../components/serverSideAuth';

const profile = () => {
  return (
    <>
      <Profile />
    </>
  );
};

export const getServerSideProps = profileProtect();
// export const getServerSideProps = async (ctx) => {
//   const headers = ctx.req?.headers;

//   try {
//     const res = await axios({
//       method: 'GET',
//       url: '/api/profile/user-profile',
//       headers,
//     });
//     console.log(res);
//     return {
//       props: {
//         profile: res.data.profile,
//       },
//     };
//   } catch (error) {
//     return { redirect: { permanent: false, destination: '/login' } };
//   }
// };

export default profile;
