import axios from 'axios';
import Profile from '../components/profile';

const profile = ({ profile }) => {
  console.log(profile);
  return (
    <>
      <Profile profile={profile} />
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  const cookie = ctx.req?.headers.cookie;

  try {
    const res = await axios.get('/api/profile/user-profile', {
      headers: {
        cookie,
      },
    });
    return {
      props: {
        profile: res.data.profile,
      },
    };
  } catch (error) {
    return { redirect: { permanent: false, destination: '/login' } };
  }
};

export default profile;
