import React from 'react';
import styled from 'styled-components';
import ErrorStyle from './ErrorStyle';
const PersonalInfo = ({ register, errors, profile }) => {
  return (
    <Container>
      <Tag>البيانات الشخصية</Tag>

      <label>الاسم الشخصي</label>
      <input
        type="name"
        name="fullName"
        ref={register}
        defaultValue={profile.fullName}
        placeholder="مثال: محمد خالد بدر"
      />
      <ErrorStyle msg={errors.fullName?.message} />

      <label>المنطقة</label>
      <input
        type="name"
        name="district"
        ref={register}
        defaultValue={profile.district}
        placeholder="مثال: المنطقة الغربية"
      />
      <ErrorStyle msg={errors.district?.message} />

      <label>المدينة</label>
      <input
        type="name"
        name="city"
        ref={register}
        defaultValue={profile.city}
        placeholder="مثال: مكة المكرمة"
      />
      <ErrorStyle msg={errors.city?.message} />
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
  label {
    margin-top: 10px;

    padding: 10px 0 0 0;

    text-align: right;
  }
  input {
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
  }
`;
const Tag = styled.p`
  text-align: center;
  font-size: 24px;
  margin-bottom: 10px;
  padding: 10px 0 0 0;
`;
export default PersonalInfo;
