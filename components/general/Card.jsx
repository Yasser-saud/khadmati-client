import styled from 'styled-components';
import ProfPic from '../svg/user-solid.svg';
import Icons from '../profile/Icons';
import React from 'react';
import TwitterIcon from '../svg/twitter.svg';
import WhatsApp from '../svg/WhatsApp.svg';
import Instagram from '../svg/instagram.svg';

const Card = ({ profile }) => {
  const colors = ['#FECACA', '#A7F3D0', '#BFDBFE', '#C7D2FE', '#DDD6FE'];
  const random = () => colors[Math.floor(Math.random() * colors.length)];

  return (
    <CardContainer>
      <Picture>
        <ProfPicWrapper>
          {profile.picture ? <img src={profile.picture} /> : <ProfPic />}
        </ProfPicWrapper>
      </Picture>

      <UserNameContainer>
        <strong>{profile.fullName}</strong>
      </UserNameContainer>

      <hr />
      <InputFields>
        <p>
          المدينة : <strong>{profile.city}</strong>
        </p>
        <p>
          المنطقة : <strong>{profile.district}</strong>
        </p>
        <ServContainer>
          {profile.services?.map((i, index) => (
            <ServWrapper
              style={{ backgroundColor: random() }}
              random={colors[random]}
              key={index}
            >
              {i}
            </ServWrapper>
          ))}
        </ServContainer>
      </InputFields>
      <hr />
      <Contact>تواصل معي</Contact>

      <IconsWrapper>
        {profile.twitterAcc !== null ? (
          <a
            href={`https://twitter.com/${profile.twitterAcc}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icons icon={<TwitterIcon />} />{' '}
          </a>
        ) : null}

        {profile.whatsappAcc !== null ? (
          <a
            href={`https://wa.me/${profile.whatsappAcc}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icons icon={<WhatsApp />} />{' '}
          </a>
        ) : null}
        {profile.instagramAcc !== null ? (
          <a
            href={`https://www.instagram.com/${profile.instagramAcc}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icons icon={<Instagram />} />
          </a>
        ) : null}
      </IconsWrapper>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 407px;
  min-height: 600px;
  background: #fff;
  border-radius: 50px;
  filter: drop-shadow(1px 2px 3px rgba(102, 102, 102, 0.15));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  hr {
    width: 90%;
    margin: 15px 0;
  }

  @media screen and (max-width: 768px) {
    width: 330px;
    min-height: 550px;
  }
`;

const Picture = styled.div`
  width: 181px;
  height: 181px;
  background: #dbdbd7;
  border-radius: 50%;
  filter: drop-shadow(2px 4px 3px rgba(102, 102, 102, 0.15));
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 30px 0;

  @media screen and (max-width: 768px) {
    width: 141px;
    height: 141px;
  }
`;
const ProfPicWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
  svg {
    width: 100px;
  }
  @media (max-width: 768px) {
    width: 150px;
    svg {
      width: 70px;
    }
  }
`;

const UserNameContainer = styled.div`
  width: 100%;
  height: 47px;
  text-align: center;
  font-size: 1.7rem;
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;
const InputFields = styled.div`
  width: 100%;
  text-align: right;
  padding: 10px 22px;
  font-size: 1.2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Contact = styled.div`
  width: 100%;
  height: 30px;
  text-align: center;
  font-size: 1.3rem;
  margin: 20px 0;
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 20px;
`;

const ServContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  /* justify-content: center; */
  margin-top: 10px;
  padding: 10px 0;
`;

const ServWrapper = styled.div`
  border: 1px solid #a7a7a7;
  border-radius: 40px;
  padding: 2px 15px;
  margin: 4px 4px;
  color: #000000;
  font-size: 0.8rem;
`;
export default Card;
