import styled from 'styled-components';
import Form from './Form';
import withAuth from '../auth';

const index = () => {
  return (
    <Container>
      <Form />
    </Container>
  );
};

const Container = styled.div`
  width: auto;
  height: 203px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-direction: column;
`;

export default index;
