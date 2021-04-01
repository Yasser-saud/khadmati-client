import styled from 'styled-components';
import axios from 'axios';
import Nav from '../components/nav';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userState } from '../context/recoilStates';

const Title = styled.h1`
  font-size: 50px;
  color: black;
`;

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
      <Title>Homee</Title>
      <h1>CORSS</h1>
      {user && <h5>{user.email}</h5>}
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
