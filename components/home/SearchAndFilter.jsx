import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchIcon from '../svg/search.svg';
import tw from 'twin.macro';
import axios from 'axios';
import Filter from './Filter';

const SearchAndFilter = ({ searchRef, setResult, payload, setPayload }) => {
  const [query, setQuery] = useState('');

  // const fetch = async () => {
  //   if (query != null) {
  //     const payload = query.split(' ');
  //     const test = { payload: [query] };
  //     try {
  //       const res = await axios.post(`/api/profile/search`, test);
  //       setResult(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // };

  const handelFetch = async () => {
    if (query) {
      payload.push(query);
    }

    try {
      const res = await axios.post('/api/profile/search', { payload });
      if (query) {
        payload.pop();
      }
      return setResult(res.data);
    } catch (error) {
      if (query) {
        payload.pop();
      }
      return setResult(false);
    }
  };

  return (
    <>
      <Wrapper>
        <SearchWrapper>
          <SearchInput
            type="text"
            ref={searchRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <SearchBtn onClick={handelFetch}>
            <SearchIcon />
          </SearchBtn>
        </SearchWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin: 30px 7px;
  width: auto;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
    grid-column: 1/5;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;

  @media (min-width: 768px) {
    justify-content: center;
    grid-column: 1/3;
  }
`;
const SearchBtn = styled.button`
  ${tw`shadow focus:outline-none focus:border-2 focus:border-blue-400 hover:bg-blue-400`}
  border-radius: 8px 0 0 8px;
  width: 60px;
  background-color: #bfdbfe;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 30px;
    height: 30px;
  }
  @media (min-width: 768px) {
    height: 50px;
  }
`;

const SearchInput = styled.input`
  ${tw`shadow focus:outline-none border-2 border-blue-200 focus:border-4 focus:border-blue-400 focus:bg-white`}
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  border-radius: 0 8px 8px 0;
  text-align: right;
  padding: 0 20px;
  font-size: 1.2rem;

  @media (min-width: 768px) {
    width: 100%;
  }
`;

const FilterWrapper = styled.div`
  padding: 30px 0;
  display: flex;
  justify-content: center;
  width: 100%;
  @media (min-width: 768px) {
    width: 10%;
    flex-direction: column;
    padding: 0;
  }
`;
export default SearchAndFilter;
