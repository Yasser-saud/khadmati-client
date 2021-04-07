import styled from 'styled-components';
import axios from 'axios';
import Nav from '../components/nav';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userState } from '../context/recoilStates';
import Homepage from '../components/home';

export default function Home({ user }) {
  const [, setUser] = useRecoilState(userState);

  useEffect(() => {
    if (user != null) {
      setUser(user);
      sessionStorage.setItem('khadmati-user', JSON.stringify(user));
    } else {
      setUser(null);
      sessionStorage.removeItem('khadmati-user');
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
      url: '/api/user/get-user',
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
