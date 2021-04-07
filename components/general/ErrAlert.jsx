import React from 'react';
import styled from 'styled-components';

const ErrAlert = ({ error }) => {
  return <ErrorWrapper>{error}</ErrorWrapper>;
};

const ErrorWrapper = styled.div`
  background: #ef4444;
  text-align: right;
  margin-bottom: 20px;
  height: 40px;
  color: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
`;

export default ErrAlert;
