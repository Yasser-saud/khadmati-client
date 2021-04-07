import React, { useState } from 'react';
import styled from 'styled-components';

const FormInput = ({ err, name, type, placeholder, ref }) => {
  return (
    <Input
      name={name}
      err={err}
      type={type}
      placeholder={placeholder}
      ref={ref}
    />
  );
};

const Input = styled.input`
  width: 312px;
  height: 39px;
  border-radius: 0px 4px 4px 0px;
  outline: ${({ err }) => (err ? '0.01px solid red' : 'none')};
  border: none;
  margin-bottom: 12px;
  font-size: 0.9rem;
  filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.15));
  text-align: right;
  font-family: inherit;
  background: ${({ err }) => err && '#FCA5A5'};
  padding: 0 10px;
  outline-offset: -1px;
  &:focus {
    outline: ${({ err }) => (err ? '0.01px solid red' : '0.01px solid blue')};
  }
`;

export default FormInput;
