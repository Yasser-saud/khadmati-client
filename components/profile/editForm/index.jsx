import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PersonalInfo from './PersonalInfo';
import ContactInfo from './ContactInfo';
import ServicesInfo from './ServicesInfo';
import Picture from './Picture';
import { schema } from './validation';
import axios from 'axios';
import { pickBy, mapValues } from 'lodash';
import router from 'next/router';

const index = ({ setEdit, profile }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const finalValues = mapValues(data, (v) => (v === '' ? null : v));
    setLoading(true);

    try {
      const res = await axios.patch('/api/profile/update-profile', finalValues);
      setLoading(false);
      router.push('/profile');
      setEdit(false);
      console.log(res.data.message);
    } catch (error) {
      setLoading(false);
      setError(error.response.data.errors);
      console.log(error.response.data.errors);
    }
  };

  return (
    <Container>
      <Form id="form" onSubmit={handleSubmit(onSubmit)}>
        <PersonalInfo profile={profile} register={register} errors={errors} />
        <ContactInfo profile={profile} register={register} errors={errors} />
        <ServicesInfo profile={profile} register={register} errors={errors} />
        <Picture register={register} errors={errors} />
      </Form>

      <Button disabled={loading ? true : ''} form="form" type="submit">
        {loading ? 'دقيقه....' : 'حفظ البيانات'}
      </Button>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  justify-content: center;
`;
const Button = styled.button`
  order: 5;
  width: 200px;
  height: 66px;
  background: #20c997;
  border: none;
  box-shadow: 0px 4px 16px rgba(102, 102, 102, 0.15);
  border-radius: 50px;
  color: #ffffff;
  font-size: 1.6rem;
  transition: 0.1s ease-out;
  &:focus {
    outline: none;
  }
  &:hover {
    filter: brightness(0.9);
  }
`;
export default index;
