import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser, clearState } from '../store/user';
import axios from 'axios';

const Title = styled.h1`
  font-size: 50px;
  color: black;
`;

export default function Home({ user }) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      dispatch(fetchUser(user));
    } else {
      dispatch(clearState());
    }
  });
  return (
    <>
      <Title>Homee</Title>
      {user && <h5>{user.email}</h5>}
    </>
  );
}

export async function getServerSideProps(context) {
  const headers = context.req?.headers;
  try {
    // const res = await axios.get('/api/user/get-user', {
    //   headers,
    // });
    const res = await fetch('http://localhost:5000/api/user/get-user', {
      credentials: 'include',
      // method: 'GET',
      headers,
    });
    const data = await res.json();
    return {
      props: {
        user: data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
}
