import styled from 'styled-components';

const Icons = ({ icon }) => {
  return <Wrapper>{icon}</Wrapper>;
};

const Wrapper = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.15));
  svg {
    width: 40px;
    height: 40px;
  }
`;

export default Icons;
