import styled from 'styled-components';
import IconBox from '../register/IconBox';
import { useForm } from 'react-hook-form';
import EmailIcon from '../svg/envelope.svg';
import KeyIcon from '../svg/key.svg';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';
import { loginSubmit, loginSelector } from '../../store/loginSlice';
import { useDispatch, useSelector } from 'react-redux';

/////
const Form = () => {
  const router = useRouter();
  const { register, errors, handleSubmit } = useForm();
  const [error, setError] = useState('');

  const onSubmit = async ({ email, password }) => {
    try {
      const res = await axios.post(
        '/api/user/login',
        { email, password },
        {
          headers: {
            'Content-Type': 'application/json',
            Cookie: 'Set-Cookie',
          },
          // withCredentials: true,
        }
      );
      // const res = await fetch(
      //   'https://khadmati-server.herokuapp.com/api/user/login',
      //   {
      //     credentials: 'include',
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //       // 'Content-Type': 'application/x-www-form-urlencoded',
      //     },
      //     body: JSON.stringify({ email, password }),
      //   }
      // );
      console.log(res);
      router.push('/');
    } catch (error) {
      console.log(error);
      if (error.response) {
        const msg = await error.response.data.msg;
        setError(msg);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('ERORR in login', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {error}
      <InputWrapper>
        <IconBox icon={<EmailIcon />} />
        <input
          type="email"
          name="email"
          placeholder="البريد الإلكتروني"
          ref={register}
        />
      </InputWrapper>

      <InputWrapper>
        <IconBox icon={<KeyIcon />} />
        <input
          name="password"
          type="password"
          placeholder="كلمة المرور"
          ref={register}
        />
      </InputWrapper>
      <ForgetPass>
        <Link href="/">نسيت كلمة المرور؟</Link>
      </ForgetPass>
      <Submit>تسجيل الدخول</Submit>
      <Register>
        اضعط <Link href="/register">هنا</Link> اذا لايوجد لديك حساب
      </Register>
    </form>
  );
};

const InputWrapper = styled.div`
  display: flex;
  input {
    width: 312px;
    height: 39px;
    border-radius: 0px 4px 4px 0px;
    outline: none;
    border: none;
    margin-bottom: 12px;
    font-size: 0.9rem;
    filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.15));
    text-align: right;
    font-family: inherit;
    transition: 0.2s ease-in;
  }
`;

const ForgetPass = styled.p`
  font-size: 0.75rem;
  text-align: right;
  margin-top: -8px;
  a {
    color: blue;
    font-weight: 600;
  }
`;

const Submit = styled.button`
  width: 100%;
  height: 43px;
  background: #5c73f2;
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
  &:hover {
    background: #7a8cf5;
  }
`;

const Register = styled.p`
  font-size: 0.75rem;
  line-height: 16px;
  text-align: right;
  a {
    color: blue;
    font-weight: 600;
  }
`;
export default Form;
