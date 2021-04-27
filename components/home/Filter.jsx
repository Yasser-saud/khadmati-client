import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Arrow from '../svg/arrow.svg';
import { debounce } from 'lodash';

const Filter = ({ label, list, payload, setPayload, listLabel }) => {
  const [display, setDisplay] = useState(false);
  const [checked, setChecked] = useState({});
  const [phoneWin, setPhoneWin] = useState(false);
  const menuRef = useRef(null);

  const screenWidth = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth <= 767) {
        console.log(window.innerWidth);
        return setPhoneWin(true);
      }
      return setPhoneWin(false);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      screenWidth();
      window.addEventListener('resize', _.debounce(screenWidth, 150));
    }

    return () => {
      window.removeEventListener('resize', screenWidth);
    };
  }, []);

  const closeWindow = (ref) => {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setDisplay(false);
        }
      };
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };

  closeWindow(menuRef);

  const handelChange = (e) => {
    const value = e.target.name;
    const isChecked = e.target.checked;
    setChecked({ ...checked, [value]: isChecked });
    if (payload.length === 0) {
      setPayload([...payload, value]);
      return;
    }
    for (const key in payload) {
      if (payload[key] == value) {
        payload.splice(key, 1);
        return;
      }
    }
    setPayload([...payload, value]);
  };

  if (!phoneWin) {
    return (
      <Container>
        <Menu ref={menuRef}>
          <ListLabel>
            <label>{listLabel}</label>
          </ListLabel>
          {list.map((i, index) => (
            <MenuOption key={index}>
              <input
                checked={checked[i.value] || false}
                onChange={handelChange}
                name={i.value}
                value={i.value}
                type="checkbox"
              />
              <label>{i.label}</label>
            </MenuOption>
          ))}
        </Menu>
      </Container>
    );
  }

  return (
    <Container>
      <Button onClick={() => setDisplay(!display)} type="button">
        {label} <Arrow />
      </Button>
      {display && (
        <Menu ref={menuRef}>
          {list.map((i, index) => (
            <MenuOption key={index}>
              <input
                checked={checked[i.value] || false}
                onChange={handelChange}
                name={i.value}
                value={i.value}
                type="checkbox"
              />
              <label>{i.label}</label>
            </MenuOption>
          ))}
        </Menu>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    grid-row: 1/2;
    grid-column: 5/6;
  }
`;

const Menu = styled.div`
  min-width: 200px;
  padding-top: 10px;
  z-index: 200;
  background-color: #2a2a2a;
  position: absolute;
  max-height: 200px;
  overflow: scroll;
  overflow-x: hidden;
  right: -10%;
  transition: 0.1s ease-in;
  border-radius: 4px;
  margin: 4px 0;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  ::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }

  @media (min-width: 768px) {
    position: relative;
    right: 0;
    z-index: 0;
    max-height: 400px;
    /* max-width: 80%; */
    /* min-width: 100px; */
    overflow-y: hidden;
  }
  ${tw`shadow-lg`}
`;

const ListLabel = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: white;
`;

const Button = styled.button`
  border-radius: 48px;
  border: 0.5px solid lightgrey;
  font-size: 0.9em;
  padding: 2px 10px;
  margin: 0 20px;
  min-width: 120px;
  background-color: white;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  svg {
    width: 10px;
    margin: 0 4px;
  }

  ${tw`focus:outline-none focus:ring-1`}
`;

const MenuOption = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 20px 6px;
  margin: 10px 0;
  background-color: #525252;
  color: #fff;
  input {
    transform: scale(1.2);
  }
`;
export default Filter;
