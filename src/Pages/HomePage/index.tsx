import React from 'react';
import styled from 'styled-components/macro';
import Layout, { PageContentContainer } from '../../Components/Layout';
import { deviceMin } from '../../consts/device';
import { H2Style, H3Style } from '../../Elements/Typo';
import CartsSection from './CardsSection';

const TalentList: React.FC = () => {
  return (
    <Layout>
      <PageContentContainer>
        <Title>جفت ارزها</Title>
        <CartsSection />
      </PageContentContainer>
    </Layout>
  );
};
export default TalentList;
const Title = styled.h1`
  ${H2Style}
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: var(--color-gray1);
  padding: 1rem 0;
  margin-left: 1rem;
  width: 100%;
  text-align: center;
  @media ${deviceMin.tabletS} {
    ${H3Style}
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
    color: var(--color-gray1);
    padding: 1.5rem 0;
  }
`;
