import Profile from '../components/profile';

const profile = ({ profile }) => {
  console.log(profile);
  return (
    <>
      <h1>{profile?.fullName}</h1>
      <Profile />
    </>
  );
};
// profile.getInitialProps = async (context) => {
//   const headers = context.req?.headers.cookie;
//   const res = await fetch('http://localhost:5000/api/profile/user-profile', {
//     headers,
//   });
//   const profile = res.json();

//   return {
//     profile: profile,
//   };
// };
export const getServerSideProps = async (context) => {
  const cookie = context.req?.headers.cookie;

  const res = await fetch('http://localhost:5000/api/profile/user-profile', {
    headers: {
      cookie,
    },
  });
  if (res.status === 401 && context.req) {
    return { redirect: { permanent: false, destination: '/login' } };
    // return { props: {} }; // crash
  }

  const profile = await res.json();
  return {
    props: {
      profile: profile,
    },
  };
};

export default profile;
