import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser, clearState } from '../store/user';
const Title = styled.h1`
  font-size: 50px;
  color: black;
`;

export default function Home({ user }) {
  const dispatch = useDispatch();
  useEffect(() => {
    // router.prefetch("/")
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
    const res = await fetch('http://localhost:5000/api/user/get-user', {
      headers,
    });
    const user = await res.json();
    return {
      props: {
        user: user,
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
}
