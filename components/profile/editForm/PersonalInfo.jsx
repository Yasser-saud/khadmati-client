import React from 'react';
import styled from 'styled-components';
import ErrorStyle from './ErrorStyle';
import FormInput from '../../general/FormInput';

const PersonalInfo = ({ register, errors, profile }) => {
  return (
    <Container>
      <Tag>البيانات الشخصية</Tag>

      <Label>الاسم الشخصي</Label>
      <FormInput
        type="name"
        name="fullName"
        register={register}
        err={errors.fullName}
        defaultValue={profile.fullName}
      />

      <Label>المنطقة</Label>
      <FormInput
        type="name"
        name="district"
        register={register}
        err={errors.district}
        defaultValue={profile.district}
      />

      <Label>المدينة</Label>
      <FormInput
        type="name"
        name="city"
        register={register}
        err={errors.city}
        defaultValue={profile.city}
      />

      <ShowOption>
        <label>
          عرض الملف الشخصي في نتائج البحث؟{' '}
          <input
            defaultChecked={profile.showProfile}
            ref={register}
            type="checkbox"
            name="showProfile"
          />
        </label>
      </ShowOption>
    </Container>
  );
};

const Container = styled.div`
  flex: 35%;
  order: 1;
  min-width: 324px;
  min-height: 400px;

  background: #fff;
  filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.15));
  box-sizing: border-box;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  margin: 20px;
`;
const Input = styled.input`
  margin: 10px 0;

  border: none;
  outline: none;
  text-align: right;
  background: white;
  height: 40px;
  font-size: 13px;
  filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.15));
  border-radius: 4px;
  padding: 0 10px;
`;
const Label = styled.label`
  margin-top: 10px;

  padding: 10px 0 0 0;

  text-align: right;
`;
const Tag = styled.p`
  text-align: center;
  font-size: 24px;
  margin-bottom: 10px;
  padding: 10px 0 0 0;
`;

const ShowOption = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export default PersonalInfo;
