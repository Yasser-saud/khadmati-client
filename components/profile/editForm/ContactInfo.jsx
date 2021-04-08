import React from 'react';
import styled from 'styled-components';
import ErrorStyle from './ErrorStyle';

const ContactInfo = ({ register, errors, profile }) => {
  return (
    <Container>
      <Tag>بيانات التواصل</Tag>

      <label>Twitter / حساب التويتر</label>
      <input
        type="name"
        name="twitterAcc"
        ref={register}
        defaultValue={profile?.twitterAcc}
        placeholder="@user123"
      />
      <ErrorStyle msg={errors.twitterAcc?.message} />

      <label>Instagram / حساب الانستقرام</label>
      <input
        type="name"
        name="instagramAcc"
        ref={register}
        defaultValue={profile?.instagramAcc}
        placeholder="@user123"
      />
      <ErrorStyle msg={errors.instagramAcc?.message} />

      <label>WhatsApp / رقم الواتس اب</label>
      <input
        type="name"
        name="whatsappAcc"
        ref={register}
        defaultValue={profile?.whatsappAcc}
        placeholder="0512345678"
      />
      <ErrorStyle msg={errors.whatsappAcc?.message} />
    </Container>
  );
};

const Container = styled.div`
  flex: 35%;
  order: 3;
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
    text-align: right;
    padding: 10px 0 0 0;
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
    &:valid {
      border: 0.5px blue;
    }
  }
`;
const Tag = styled.p`
  text-align: center;
  font-size: 24px;
  margin-bottom: 10px;
  padding: 10px 0 0 0;
`;
export default ContactInfo;
