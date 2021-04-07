import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import IconBox from './IconBox';
import EmailIcon from '../svg/envelope.svg';
import KeyIcon from '../svg/key.svg';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import axios from 'axios';
import tw from 'twin.macro';
import ErrAlert from '../general/ErrAlert';

import Spinner from '../svg/Spinner.svg';
const Form = () => {
  const router = useRouter();
  const { register, errors, handleSubmit, watch } = useForm();
  const password = useRef();
  password.current = watch('password', '');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async ({ email, password }) => {
    const payload = { email, password };
    setLoading(true);
    try {
      const res = await axios.post('/api/user/register', payload);
      router.push('/');
    } catch (error) {
      if (error.response) {
        const msg = error.response.data.msg;
        setError(msg);
        setLoading(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {error && <ErrAlert error={error} />}
      <InputWrapper err={Boolean(errors.email)}>
        <IconBox icon={<EmailIcon />} />
        <Input
          err={Boolean(errors.email)}
          name="email"
          type="email"
          placeholder="البريد الاليكتروني"
          ref={register({
            required: 'الرجاء تعبأة الخانة',
          })}
        />
      </InputWrapper>
      {errors.email && <ErrMsg>{errors.email?.message}</ErrMsg>}
      <InputWrapper err={Boolean(errors.password)}>
        <IconBox icon={<KeyIcon />} />
        <Input
          err={Boolean(errors.password)}
          name="password"
          type="password"
          placeholder="كلمة المرور"
          ref={register({
            required: 'الرجاء تعبأة الخانة',
            minLength: {
              value: 6,
              message: 'كلمة المرور يجب ان تكون من 6 احرف او ارقام',
            },
          })}
        />
      </InputWrapper>
      {errors.password && <ErrMsg>{errors.password?.message}</ErrMsg>}

      <InputWrapper err={Boolean(errors.password_repeat)}>
        <IconBox icon={<KeyIcon />} />
        <Input
          err={Boolean(errors.password_repeat)}
          name="password_repeat"
          type="password"
          placeholder="تأكيد كلمة المرور"
          ref={register({
            validate: (value) =>
              value === password.current || 'كلمة المرور غير مطابقة',
          })}
        />
      </InputWrapper>
      {errors.password_repeat && (
        <ErrMsg>{errors.password_repeat?.message}</ErrMsg>
      )}

      <Disclaimer>
        بالتسجيل، أنت تؤكد أنك قد قرأت ووافقت على{' '}
        <Link href="/">
          <a>شروط الاستخدام</a>
        </Link>{' '}
        و{' '}
        <Link href="/">
          <a>سياسة الخصوصية</a>
        </Link>{' '}
        الخاصة بنا
      </Disclaimer>
      <Submit loading={loading} disabled={loading ? true : false}>
        {loading ? <Spinner /> : 'تسجيل'}
      </Submit>
      <Login>
        اضغط{' '}
        <Link href="/login">
          <a>هنا</a>
        </Link>{' '}
        لتسجيل الدخول
      </Login>
    </form>
  );
};

const InputWrapper = styled.div`
  display: flex;
`;
const Input = styled.input`
  width: 312px;
  height: 39px;
  border-radius: 0px 4px 4px 0px;
  outline: ${({ err }) => (err ? '0.01px solid red' : 'none')};
  border: none;
  margin-bottom: 12px;
  font-size: 0.9rem;

  -webkit-box-shadow: 1px 1px 3px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 1px 3px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 1px 1px 3px -2px rgba(0, 0, 0, 0.75);
  -webkit-appearance: none;

  text-align: right;
  font-family: inherit;
  background: ${({ err }) => err && '#ffe4e4'};
  padding: 0 10px;
  outline-offset: -1px;
  &:focus {
    outline: ${({ err }) => (err ? '0.01px solid red' : '0.01px solid blue')};
  }
  -webkit-appearance: none;
`;
const Disclaimer = styled.p`
  font-size: 0.65rem;
  line-height: 10px;
  text-align: right;
  margin-bottom: 13px;
  a {
    color: blue;
    font-weight: 600;
  }
`;

const Submit = styled.button`
  width: 355px;
  height: 43px;
  background: ${({ loading }) => (loading ? '#93a0e9' : '#5c73f2')};
  filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.15));
  border-radius: 50px;
  outline: none;
  border: none;
  font-size: 1.5rem;
  color: white;
  font-family: inherit;
  transition: 0.1s;
  margin-top: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ loading }) => (loading ? 'not-allowed' : 'pointer')};
  &:hover {
    background: #7a8cf5;
  }
  &:focus {
    outline: 0;
  }
  ${tw`focus:ring-4`}
  svg {
    width: 40px;
    height: 40px;
    color: red;
  }
`;
const Login = styled.p`
  font-size: 0.85rem;
  text-align: right;
  padding-top: 10px;
  a {
    color: blue;
    font-weight: 600;
  }
`;

const ErrMsg = styled.p`
  text-align: right;
  color: red;
  font-size: 12px;
  margin-bottom: 20px;
  margin-top: -10px;
  font-weight: 900;
`;
export default Form;
