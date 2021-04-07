import styled from 'styled-components';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import NavProfilePic from './NavProfileIcon';
import { useInView } from 'react-intersection-observer';
import { useRecoilState } from 'recoil';
import { userState } from '../../context/recoilStates';
import { useRouter } from 'next/router';
import tw from 'twin.macro';
const index = () => {
  const [nav, setNav] = useState(false);

  const [user, setUser] = useRecoilState(userState);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    setLoading(false);
  }, []);

  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  if (typeof window !== 'undefined') {
    const checkWindow = () => {
      const ws = window.scrollY;
      if (ws > 20) {
        setNav(true);
      } else {
        setNav(false);
      }
    };
    window.addEventListener('scroll', checkWindow);
  }

  return (
    <Wrapper ref={ref} ws={nav} className="sticky top-0 z-40">
      <Nav ref={ref} ws={nav} className="container mx-auto">
        {loading ? (
          <LeftWrapper />
        ) : (
          <LeftWrapper ws={nav}>
            {user ? (
              <NavProfilePic user={user} />
            ) : (
              <>
                <Link href="/register">
                  <a>تسجيل</a>
                </Link>
                <hr />
                <Link href="/login">
                  <a>دخول</a>
                </Link>
              </>
            )}
          </LeftWrapper>
        )}
        <RightWrapper ws={nav}>
          <Logo>
            <Link href="/">
              <a>خدماتي</a>
            </Link>
          </Logo>
        </RightWrapper>
      </Nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 70px;
  width: 100%;
  background: ${(props) => (props.ws ? '#eeeeee' : 'transparent')};
  /* border-bottom: ${(props) => (props.ws ? '1px solid #909090' : 'none')}; */
  transition: 0.2s ease-in-out;
  a {
    color: ${(props) => (props.ws ? 'black' : '')};
  }
  ${(props) => props.ws && tw`shadow-md`}
`;
const Nav = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;
const LeftWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  height: 100%;

  hr {
    height: 1px;
    width: 20px;
    color: black;
    margin: 13px 5px;
    transform: rotate(90deg);
  }
`;
const RightWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
`;

const Logo = styled.div`
  font-size: 26px;
`;

export default index;
