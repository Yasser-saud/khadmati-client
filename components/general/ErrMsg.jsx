import React from 'react';
import styled from 'styled-components';
const ErrMsg = ({ msg }) => {
  return <Container>{msg}</Container>;
};

const Container = styled.p`
  text-align: right;
  color: red;
  font-size: 12px;
  margin-bottom: 20px;
  margin-top: -10px;
  font-weight: 900;
`;
export default ErrMsg;
