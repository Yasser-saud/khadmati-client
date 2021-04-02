import axios from 'axios';
import Profile from '../components/profile';
import Nav from '../components/nav';

const profile = ({ profile }) => {
  console.log(profile);
  return (
    <>
      <Profile profile={profile} />
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  const headers = ctx.req?.headers;

  try {
    const res = await axios({
      method: 'GET',
      url: '/api/profile/user-profile',
      headers,
    });
    console.log(res);
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
