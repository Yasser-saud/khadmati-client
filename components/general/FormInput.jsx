import React from 'react';
import styled from 'styled-components';

const FormInput = ({ err, register, ...inputProps }) => {
  return (
    <Container>
      <Input {...inputProps} err={err} ref={register} />
      {err && <Error>{err.message}</Error>}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  height: 39px;
  border-radius: 0px 4px 4px 0px;
  outline: ${({ err }) => (err ? '0.01px solid red' : 'none')};
  border: none;
  margin-bottom: 12px;
  font-size: 0.9rem;

  -webkit-box-shadow: 1px 1px 5px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 1px 5px -3px rgba(0, 0, 0, 0.75);
  box-shadow: 1px 1px 5px -3px rgba(0, 0, 0, 0.75);
  -webkit-appearance: none;

  text-align: right;
  font-family: inherit;
  background: ${({ err }) => err && '#ffe4e4'};
  padding: 0 10px;
  outline-offset: -1px;
  /* transition: 0.1s; */
  &:focus {
    /* -webkit-box-shadow: 0px 0px 1px 10px rgba(96, 165, 250, 0.74);
    -moz-box-shadow: 0px 0px 1px 10px rgba(96, 165, 250, 0.74); */
    box-shadow: 0px 0px 1px 3px
      ${({ err }) => (err ? 'rgba(248,113,113,1)' : 'rgba(96,165,250,0.74)')};
  }
`;

const Error = styled.p`
  text-align: right;
  color: red;
  font-size: 12px;
  margin-bottom: 20px;
  margin-top: -10px;
  font-weight: 900;
`;
export default FormInput;
