import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import EditForm from './editForm';

const profile = ({ profile }) => {
  const [edit, setEdit] = useState(false);

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
