import React, { useRef } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Search from '../svg/search.svg';

const HeroImage = ({ searchRef }) => {
  return (
    <>
      <ImageContainer>
        <img src="/hero.jpg" />
        <Statement>
          نوفر لك جميع الخدمات المتواجدة في منطقتك <span>في منصة واحدة</span>
        </Statement>

        <HeroButton onClick={() => searchRef.current.focus()}>
          <Search /> <span>ابحث الاَن</span>
        </HeroButton>
      </ImageContainer>
    </>
  );
};

const Statement = styled.p`
  position: absolute;
  font-size: 2rem;
  width: 250px;
  text-align: center;
  top: 20%;
  left: 2%;
  color: #000000;
  span {
    background: rgba(24, 24, 24, 0.8);
    color: white;
    padding: 5px;
    white-space: nowrap;
  }
  @media (min-width: 768px) {
    width: 580px;
    left: 8%;
    top: 25%;
    line-height: 70px;
    font-size: 2.7rem;
  }
`;

const ImageContainer = styled.div`
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
    opacity: 0.4;
  }

  @media (min-width: 768px) {
    height: 600px;

    img {
      margin-left: 100px;
      min-width: 1200px;
    }
  }
`;

const HeroButton = styled.button`
  ${tw`focus:outline-none focus:ring hover:bg-blue-500 active:bg-blue-700 shadow-xl`}
  position: absolute;
  left: 10%;
  bottom: 12%;
  background: #2563eb;
  border-radius: 32px;
  width: 180px;
  height: 40px;
  text-align: center;
  font-size: 1.3rem;
  color: #dddddd;
  line-height: 40px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  svg {
    width: 25px;
  }

  span {
    padding-top: 3px;
  }

  @media (min-width: 768px) {
    width: 250px;
    height: 67px;
    font-size: 1.8rem;
    bottom: 20%;
    svg {
      width: 30px;
    }
  }
`;

export default HeroImage;
