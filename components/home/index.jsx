import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const index = ({ user }) => {
  return (
    <Container className="container mx-auto">
      <ImageContainer>
        <img src="/hero.jpg" />
        <Statement>
          نوفر لك جميع الخدمات المتواجدة في منطقتك <span>في منصة واحدة</span>
        </Statement>
        <HeroSeach name="search" placeholder="مدرس خاص" />
        <HeroButton>ابــحــث</HeroButton>
      </ImageContainer>
      <h1>Homee</h1>
      {user && <h3>Hello {user.email}</h3>}
    </Container>
  );
};

const Container = styled.div`
  //width
`;

const Statement = styled.p`
  position: absolute;
  font-size: 1.5rem;
  width: 250px;
  text-align: center;
  top: 20%;
  left: 2%;
  /* font-weight: 600; */
  /* transform: translateX(-50%); */
  color: #000000;
  span {
    background: rgba(24, 24, 24, 0.8);
    color: white;
    padding: 0 10px;
  }
`;
const ImageContainer = styled.div`
  /* width: 100%; */
  overflow: hidden;
  height: 400px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;

  img {
    min-width: 600px;
    transform: rotate(-90deg);
    margin-left: 150px;
  }

  @media (min-width: 900px) {
    height: 400px;
  }
`;

const HeroSeach = styled.input`
  position: absolute;
  left: 4%;
  bottom: 30%;
  height: 40px;
  text-align: right;
  width: 170px;
  padding: 0 10px;
  outline: none;
  border-radius: 4px;
  box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.2),
    6px 6px 10px rgba(0, 0, 0, 0.05);
  :focus {
    box-shadow: 0px 0px 1px 3px rgba(96, 165, 250, 0.74);
  }
`;

const HeroButton = styled.button`
  position: absolute;
  left: 9%;
  bottom: 12%;
  background: #60a5fa;
  border-radius: 32px;
  width: 130px;
  height: 45px;
  box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.2),
    6px 6px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  color: #3a3a3a;
  :focus {
    outline: none;
    box-shadow: 0px 0px 1px 3px rgba(96, 165, 250, 0.74);
  }
`;
export default index;
