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
import FormInput from '../general/FormInput';

const Form = () => {
  const router = useRouter();
  const { register, errors, handleSubmit, watch } = useForm();
  const password = useRef();
  password.current = watch('password', '');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState();

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
      <InputWrapper>
        <IconBox icon={<EmailIcon />} />
        <FormInput
          err={errors.email}
          name="email"
          type="email"
          placeholder="البريد الاليكتروني"
          register={register({
            required: 'الرجاء تعبأة الخانة',
          })}
        />
      </InputWrapper>

      <InputWrapper>
        <IconBox icon={<KeyIcon />} />
        <FormInput
          err={errors.password}
          name="password"
          type="password"
          placeholder="كلمة المرور"
          register={register({
            required: 'الرجاء تعبأة الخانة',
            minLength: {
              value: 6,
              message: 'كلمة المرور يجب ان تكون من 6 احرف او ارقام',
            },
          })}
        />
      </InputWrapper>

      <InputWrapper>
        <IconBox icon={<KeyIcon />} />
        <FormInput
          err={errors.password_repeat}
          name="password_repeat"
          type="password"
          placeholder="تأكيد كلمة المرور"
          register={register({
            validate: (value) =>
              value === password.current || 'كلمة المرور غير مطابقة',
          })}
        />
      </InputWrapper>

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
  font-size: 1.4rem;
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
  ${tw`focus:outline-none focus:ring-4`}

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

export default Form;
