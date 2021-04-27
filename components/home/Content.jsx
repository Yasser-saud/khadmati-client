import React, { useEffect, useState } from 'react';
import Card from '../general/Card';
import styled from 'styled-components';
import axios from 'axios';
import Close from '../svg/cancel.svg';
import { useRouter } from 'next/router';
import Spinner from '../svg/Spinner.svg';

const Content = ({ result, setResult, loading, setLoading }) => {
  const [frontpage, setFrontpage] = useState([]);
  const [error, setError] = useState(null);

  const router = useRouter();

  const frontPageItems = async () => {
    setLoading(true);
    try {
      const res = await axios.get('/api/profile/frontpage');
      setFrontpage(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError('500 - Internal Server Error');
    }
  };

  useEffect(() => {
    frontPageItems();
  }, []);

  if (loading) {
    return (
      <Container>
        <Spinner />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <h1>{error}</h1>
      </Container>
    );
  }

  return (
    <Container>
      {!result && (
        <Alert>
          <button onClick={() => setResult([])}>
            <Close />
          </button>
          <h1>لايوجد مطابقة للبحث</h1>
        </Alert>
      )}
      <ResultContainer>
        {result.length > 0
          ? result?.map((i, index) => <Card key={index} profile={i} />)
          : frontpage.map((i, index) => <Card key={index} profile={i} />)}
      </ResultContainer>
    </Container>
  );
};

const Container = styled.div`
  grid-column: 1/5;
  grid-row: 2/4;
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    width: 70px;
  }
`;
const Alert = styled.div`
  display: flex;
  text-align: right;
  justify-content: space-between;
  align-items: center;
  background-color: #fd9494;
  width: 400px;
  height: 50px;
  border-radius: 4px;
  padding: 0 10px;
  font-size: 1.2rem;

  button {
    height: 80%;
  }
  svg {
    width: 15px;
  }
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > * {
    margin: 30px 30px;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
export default Content;
