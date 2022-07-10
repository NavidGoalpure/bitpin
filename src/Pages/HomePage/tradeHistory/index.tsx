import React from 'react';
import styled from 'styled-components/macro';
import { useParams } from 'react-router-dom';

const TradeHistory = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <Container>
      <h2>اینجا سابقه خرید و فروش ارز شماره {id}دیده میشود</h2>
    </Container>
  );
};
export default TradeHistory;

const Container = styled.section`
  position: relative;
  width: 100%;
  padding: 0 1rem;
  padding-right: 0;
`;
