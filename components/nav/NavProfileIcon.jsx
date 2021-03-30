import Link from 'next/link';
import router from 'next/router';
import styled from 'styled-components';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { userState } from '../../context/recoilStates';

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
      <DropDown>
        <Li>
          <Link href="/profile">الملف الشخصي</Link>
        </Li>
        <Li onClick={logoutUser}>خروج</Li>
      </DropDown>
    </Ring>
  );
};

const Ring = styled.div`
  width: 52px;
  height: 52px;
  background: #bdbdbd;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  position: relative;
  &:hover ul {
    opacity: 1;
    pointer-events: all;
    transform: none;
  }
`;

const DropDown = styled.ul`
  background: white;
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
  font-size: 20px;
  height: 50px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  /* transition: 0.1s; */

  &:hover {
    background: gray;
  }
`;

export default NavProfileIcon;
