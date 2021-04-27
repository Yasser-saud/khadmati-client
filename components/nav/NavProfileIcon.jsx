import Link from 'next/link';
import router from 'next/router';
import styled from 'styled-components';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { userState } from '../../context/recoilStates';
import Arrow from '../svg/left-arrow.svg';
import PlaceholderPic from '../svg/user.svg';

const NavProfileIcon = () => {
  const [, setUser] = useRecoilState(userState);

  const logoutUser = async () => {
    try {
      const res = await axios.get('/api/user/logout');
      setUser(null);
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Ring>
      <Image>
        <img src="/lucy.jpg" />
      </Image>
      <DropDown>
        <Li>
          <PlaceholderPic />
          <Link href="/profile">الملف الشخصي</Link>
        </Li>
        <Li onClick={logoutUser}>
          <Arrow />
          خروج
        </Li>
      </DropDown>
    </Ring>
  );
};

const Ring = styled.div`
  width: 52px;
  height: 52px;
  background: #bdbdbd;
  border: 2px solid #dfdfdf;
  box-sizing: border-box;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  position: relative;
  &:hover ul {
    opacity: 1;
    pointer-events: all;
    transform: none;
  }
  @media (max-width: 768px) {
    width: 42px;
    height: 42px;
  }
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
`;

const DropDown = styled.ul`
  background-color: #2a2a2a;
  width: auto;
  height: auto;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: 70%;
  left: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 15px 0px;
  transition: 0.1s ease-in-out;
  transform: translateY(50px);
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
`;

const Li = styled.li`
  background-color: #525252;
  font-size: 1rem;
  height: 50px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 0 15px;
  margin: 5px 0;
  color: #fff;
  a {
    color: #fff;
  }

  &:hover {
    background: gray;
  }

  svg {
    width: 20px;
    height: 20px;
    color: #fff;
    fill: #fff;
  }
`;

export default NavProfileIcon;
