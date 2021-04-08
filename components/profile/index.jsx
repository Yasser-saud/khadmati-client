import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Card from './Card';
import EditForm from './editForm';
import axios from 'axios';
import useSWR from 'swr';
import tw from 'twin.macro';

const fetchProfile = async (url) => {
  const res = await axios.get(url);
  return res.data;
};

const profile = () => {
  const [edit, setEdit] = useState(false);

  const { data, error } = useSWR('/api/profile/user-profile', fetchProfile);

  if (error) {
    return <h1>ERROR</h1>;
  }
  if (!data) {
    return (
      <div className="container mx-auto">
        <ProfileTag>الملف الشخصي</ProfileTag>
        <hr />
        <CardWrapper>
          <Loading />
        </CardWrapper>
      </div>
    );
  }

  const profile = data.profile;
  return (
    <div className="container mx-auto">
      <ProfileTag>الملف الشخصي</ProfileTag>
      <hr />
      <CardWrapper>
        {edit ? (
          <EditForm profile={profile} setEdit={setEdit} />
        ) : (
          <Card profile={profile} />
        )}

        <EditBtn edit={edit} onClick={() => setEdit(!edit)}>
          {edit ? 'الغاء' : 'تعديل البيانات'}
        </EditBtn>
      </CardWrapper>
    </div>
  );
};

const ProfileTag = styled.h1`
  font-size: 48px;
  text-align: right;
  margin-bottom: 31px;
  padding: 0 20px;
  @media (max-width: 768px) {
    font-size: 32px;
  }
  @media (max-width: 400px) {
    font-size: 26px;
  }
`;

const CardWrapper = styled.div`
  margin-top: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const EditBtn = styled.button`
  margin: ${({ edit }) => (edit ? '20px 0 30px 0' : '100px 0')};
  width: 200px;
  height: 66px;
  background: ${(props) => (props.edit ? '#EB5353' : '#5C73F2')};
  box-shadow: 1px 2px 4px rgba(102, 102, 102, 0.15);
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  color: white;
  cursor: pointer;
  transition: 0.1s ease-out;
  border: none;

  &:hover {
    filter: brightness(0.9);
  }
  ${tw`focus:outline-none focus:ring-4`}
  @media (max-width: 768px) {
    font-size: 1.3rem;
    width: 160px;
    height: 46px;
  }
`;
const shimmer = keyframes`
100% {
    transform: translateX(100%);
  }
`;

const Loading = styled.div`
  width: 407px;
  min-height: 586px;
  background: #e2e8f0;
  border-radius: 50px;
  filter: drop-shadow(1px 2px 3px rgba(102, 102, 102, 0.15));
  overflow: hidden;
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.2) 20%,
      rgba(255, 255, 255, 0.5) 60%,
      rgba(255, 255, 255, 0)
    );
    animation: ${shimmer} 1s infinite;
    content: '';
  }
  @media screen and (max-width: 768px) {
    width: 330px;
    min-height: 550px;
  }
`;

export default profile;
