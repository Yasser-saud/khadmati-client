import styled from 'styled-components';
import ProfPic from '../svg/user-solid.svg';
import Icons from './Icons';
import React from 'react';
import TwitterIcon from '../svg/twitter.svg';
import WhatsApp from '../svg/WhatsApp.svg';
import Instagram from '../svg/instagram.svg';
const Card = ({ profile }) => {
  return (
    <CardContainer>
      <Picture>
        <ProfPicWrapper>
          <ProfPic />
        </ProfPicWrapper>
      </Picture>

      <UserNameContainer>{profile?.fullName}</UserNameContainer>

      <hr />
      <InputFields>
        <p>المدينة: {profile?.city}</p>
        <p>المنطقة: {profile?.district}</p>
      </InputFields>

      <Contact>تواصل معي</Contact>

      <IconsWrapper>
        {profile?.twitterAcc !== null ? (
          <a
            href={`https://twitter.com/${profile.twitterAcc}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icons icon={<TwitterIcon />} />{' '}
          </a>
        ) : null}

        {profile?.whatsappAcc !== null ? (
          <a
            href={`https://wa.me/${profile.whatsappAcc}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icons icon={<WhatsApp />} />{' '}
          </a>
        ) : null}
        {profile?.instagramAcc !== null ? (
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
  min-height: 586px;
  background: #fff;
  border-radius: 50px;
  filter: drop-shadow(1px 2px 3px rgba(102, 102, 102, 0.15));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  hr {
    width: 90%;
  }

  @media screen and (max-width: 700px) {
    width: 350px;
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
  margin-bottom: 30px;
`;
const ProfPicWrapper = styled.div`
  width: 100px;
`;

const UserNameContainer = styled.div`
  width: 100%;
  height: 47px;
  text-align: center;
  font-size: 1.7rem;
`;
const InputFields = styled.div`
  width: 100%;
  text-align: right;
  padding: 22px;
  font-size: 1.2rem;
`;

const Contact = styled.div`
  width: 100%;
  height: 30px;
  text-align: center;
  font-size: 1.3rem;
  margin-bottom: 20px;
`;

const IconsWrapper = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-evenly;
  align-items: center;
`;
export default Card;
