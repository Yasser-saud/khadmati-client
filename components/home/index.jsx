import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import HeroImage from './HeroImage';
import SearchAndFilter from './SearchAndFilter';
import Content from './Content';
import Filter from './Filter';

const index = ({ user }) => {
  const searchRef = useRef();
  const [result, setResult] = useState([]);
  const [payload, setPayload] = useState([]);
  const [loading, setLoading] = useState(false);

  const cityList = [
    { label: 'مكة المكرمة', value: 'مكة' },
    { label: 'جدة', value: 'جدة' },
    { label: 'الرياض', value: 'الرياض' },
    { label: 'الطائف', value: 'الطائف' },
    { label: 'المدينة المنورة', value: 'المدينة' },
  ];
  const services = [
    { label: 'طباخ', value: 'طباخ' },
    { label: 'معلم', value: 'معلم' },
    { label: 'مدرب', value: 'مدرب' },
    { label: 'مطور مواقع', value: 'مطور' },
  ];

  return (
    <Container className="container sm mx-auto">
      <HeroImage searchRef={searchRef} />
      <SearchWrapper>
        <SearchAndFilter
          payload={payload}
          setPayload={setPayload}
          searchRef={searchRef}
          setResult={setResult}
          loading={loading}
          setLoading={setLoading}
        />

        <FilterWrapper>
          <Filter
            setPayload={setPayload}
            payload={payload}
            label="اختر المدينة"
            list={cityList}
            listLabel="المدينة"
          ></Filter>

          <Filter
            setPayload={setPayload}
            payload={payload}
            label="اختر الخدمة"
            list={services}
            listLabel="الخدمة"
          ></Filter>
        </FilterWrapper>

        <Content
          result={result}
          setResult={setResult}
          loading={loading}
          setLoading={setLoading}
        />
      </SearchWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SearchWrapper = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: 100px 200px auto;
  }
`;

const FilterWrapper = styled.div`
  padding: 30px 0;
  display: flex;
  justify-content: center;
  width: 100%;
  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    /* align-items: center; */
    padding: 30px 10px;
    grid-column: 5/6;
    grid-row: 1/5;
  }
`;
export default index;
