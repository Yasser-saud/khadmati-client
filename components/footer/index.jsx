import styled from 'styled-components';
import TwitterIcon from '../svg/twitter-brands.svg';
import GithubIcon from '../svg/github-brands.svg';
import Link from 'next/link';
import React from 'react';
const index = () => {
  return (
    <FooterContainer>
      <ContentWrapper className="container mx-auto">
        <PolicyBox>
          <Link href="#">
            <a>سياسة الخصوصية</a>
          </Link>
          <Link href="#">
            <a>شروط الاستخدام</a>
          </Link>
        </PolicyBox>
        <NameBox>
          <p>@Yasser جميع الحقوق محفوضة</p>
          <p>Yasser_sa@outlook.com</p>
        </NameBox>
        <IconsBox>
          <TwitterIcon />
          <GithubIcon />
        </IconsBox>
      </ContentWrapper>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  height: 80px;
  width: 100%;
  background: #262626;
  position: absolute;
  bottom: 0;

  @media (max-width: 700px) {
    padding: 0 5px;
  }
`;
const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;
const NameBox = styled.div`
  font-size: 13px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 700px) {
    font-size: 10px;
  }
`;

const IconsBox = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  > * {
    &:first-child {
      color: #23a0ff;
    }
    width: 30px;
    margin: 0px 5px;
    transition: 0.1s;
    cursor: pointer;
    &:hover {
      filter: brightness(0.8);
    }
  }
`;

const PolicyBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    color: white;
    font-size: 13px;
    text-decoration: underline;
    text-underline-position: under;
    padding: 3px 0;
    @media screen and (max-width: 700px) {
      font-size: 10px;
    }
  }
`;

export default index;
