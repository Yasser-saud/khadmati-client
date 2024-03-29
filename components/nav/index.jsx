import styled from 'styled-components';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import NavProfilePic from './NavProfileIcon';
import { useInView } from 'react-intersection-observer';
import { useSelector } from 'react-redux';
import { userSelector } from '../../store/user';
import router from 'next/router';

const index = () => {
  const [nav, setNav] = useState(false);
  const { userInfo } = useSelector(userSelector);
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  if (typeof window !== 'undefined') {
    const checkWindow = () => {
      const ws = window.scrollY;
      if (ws > 50) {
        setNav(true);
      } else {
        setNav(false);
      }
    };
    window.addEventListener('scroll', checkWindow);
  }
  return (
    <>
      {router.pathname !== '/login' ? (
        <Nav ref={ref} ws={nav} className="container sticky-top">
          <LeftWrapper ws={nav}>
            {userInfo ? (
              <NavProfilePic />
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

          <RightWrapper ws={nav}>
            <Logo>
              <Link href="/">
                <a>خدماتي</a>
              </Link>
            </Logo>
          </RightWrapper>
        </Nav>
      ) : (
        <div></div>
      )}
    </>
  );
};

const Nav = styled.div`
  height: 80px;
  width: 100%;
  background: ${(props) => (props.ws ? '#747474' : 'transparent')};
  display: flex;
  align-items: center;
  border-bottom: ${(props) => (props.ws ? '1px solid #A5A5A5' : 'none')};
  transition: 0.2s ease-in-out;
  a {
    color: ${(props) => (props.ws ? 'white' : 'black')};
  }
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
  font-size: 36px;
`;

export default index;
