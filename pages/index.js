import axios from 'axios';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userState } from '../context/recoilStates';
import Homepage from '../components/home';

export default function Home({ user }) {
  const [, setUser] = useRecoilState(userState);

  useEffect(() => {
    if (user !== null) {
      setUser(user);
    } else {
      setUser(null);
    }
  }, []);

  return (
    <>
      <Homepage user={user} />
    </>
  );
}

export async function getServerSideProps(context) {
  const headers = context.req?.headers;

  try {
    const session = await axios({
      method: 'GET',
      url: '/api/user/current-user',
      headers,
    });
    return {
      props: {
        user: session.data,
      },
    };
  } catch (error) {
    return {
      props: {
        user: null,
      },
    };
  }
}
