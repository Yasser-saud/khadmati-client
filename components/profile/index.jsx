import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import EditForm from './editForm';
import axios from 'axios';
import useSWR from 'swr';

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
    return <h1>LOADING . . .</h1>;
  }
  const profile = data.profile;
  console.log(data);
  return (
    <div className="container mt-5">
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
`;

const CardWrapper = styled.div`
  margin-top: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const EditBtn = styled.div`
  margin-top: 50px;
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
  &:hover {
    filter: brightness(0.9);
  }
`;

export default profile;
