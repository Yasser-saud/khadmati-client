import React, { useState } from 'react';
import styled from 'styled-components';
import ErrorStyle from './ErrorStyle';

const ServicesInfo = ({ register, errors }) => {
  const [isChecked, setIsChecked] = useState();

  return (
    <Container>
      <Tag>الخدمات التوفرة لديك</Tag>
      <Wrapper>
        <label>توصيل طلاب</label>
        <input
          type="checkbox"
          name="services"
          value="توصيل طلاب"
          ref={register}
        />
      </Wrapper>

      <Wrapper>
        <label>توصيل معلمات</label>
        <input
          type="checkbox"
          name="services"
          value="توصيل معلمات"
          ref={register}
        />
      </Wrapper>

      <Wrapper>
        <label>مندوب توصيل</label>
        <input
          type="checkbox"
          name="services"
          value="مندوب توصيل"
          ref={register}
        />
      </Wrapper>

      <Wrapper>
        <label>مدرس خاص</label>
        <input
          type="checkbox"
          name="services"
          value="مدرس خاص"
          ref={register}
        />
      </Wrapper>

      <Wrapper>
        <label>مدرس خاص</label>
        <input
          type="checkbox"
          name="services"
          value="مدرس خاص"
          ref={register}
        />
      </Wrapper>

      <Wrapper>
        <label>مدرس خاص</label>
        <input
          type="checkbox"
          name="services"
          value="مدرس خاص"
          ref={register}
        />
      </Wrapper>
      <ErrorStyle msg={errors.services?.message} />
    </Container>
  );
};
const Container = styled.div`
  flex: 35%;
  order: 2;
  padding: 10px 20px;
  min-width: 324px;
  min-height: 400px;
  background: #fff;
  filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.15));
  box-sizing: border-box;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  margin: 20px;
`;
const Tag = styled.div`
  text-align: center;
  font-size: 24px;
  margin-bottom: 10px;
  padding: 10px 0;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  padding: 0 10px;
  background: #dbdbdb;
  border-radius: 4px;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
`;

export default ServicesInfo;
