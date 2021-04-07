import styled from 'styled-components';
import IconBox from '../register/IconBox';
import { useForm } from 'react-hook-form';
import EmailIcon from '../svg/envelope.svg';
import KeyIcon from '../svg/key.svg';
import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';
import tw from 'twin.macro';
import ErrAlert from '../general/ErrAlert';
import Spinner from '../svg/Spinner.svg';

/////
const Form = () => {
  const router = useRouter();
  const { register, errors, handleSubmit } = useForm();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async ({ email, password }) => {
    setLoading(true);
    try {
      const res = await axios.post(
        '/api/user/login',
        { email, password },
        { withCredentials: true }
      );

      router.push('/');
    } catch (error) {
      setLoading(false);
      if (error.response) {
        const msg = await error.response.data.msg;
        setError(msg);
      } else if (error.request) {
      } else {
        console.log('ERORR in login', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {error && <ErrAlert error={error} />}
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
      <Submit loading={loading} disabled={loading ? true : false}>
        {loading ? <Spinner /> : 'تسجيل الدخول'}
      </Submit>
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
    /* filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.15)); */
    ${tw`shadow`}
    text-align: right;
    font-family: inherit;
    transition: 0.2s ease-in;
    padding: 0 10px;
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

  filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.15));
  border-radius: 50px;
  outline: none;
  border: none;
  font-size: 1.5rem;
  color: white;
  font-family: inherit;
  transition: 0.1s;
  margin-top: 20px;
  background: ${({ loading }) => (loading ? '#93a0e9' : '#5c73f2')};
  cursor: ${({ loading }) => (loading ? 'not-allowed' : 'pointer')};
  display: flex;
  align-items: center;
  justify-content: center;
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
    margin: 0;
  }
`;

const Register = styled.p`
  font-size: 0.85rem;
  line-height: 16px;
  text-align: right;
  padding-top: 10px;
  a {
    color: blue;
    font-weight: 600;
  }
`;

export default Form;
