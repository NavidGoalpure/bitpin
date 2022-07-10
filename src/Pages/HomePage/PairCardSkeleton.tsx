import React from 'react';
import styled, { keyframes } from 'styled-components/macro';
import { IoIosArrowBack } from 'react-icons/io';
import Skeleton from '../../Elements/Skeleton';

const PairCardSkeleton: React.FC = () => {
  return (
    <Wrapper>
      <SkeletonContainer>
        <Circle1 />
        <Circle2 />
        <StyledSkeleton />
      </SkeletonContainer>
      <NextIcon size={30} />
    </Wrapper>
  );
};

export default PairCardSkeleton;

const progressKeyframes = keyframes`
   0% {
     background-color: var(--color-gray2);
    }
    50% {
      background-color: #555658;
    }
    100% {
      background-color: var(--color-gray2);
    }
    `;

const Wrapper = styled.div`
  animation: ${progressKeyframes} 1.2s ease-in-out infinite;
  filter: drop-shadow(2px 4px 6px black);
  position: relative;
  border: 1px solid var(--color-gray5);
  margin: 0 1rem 1rem;
  width: 30%;
  height: 4rem;
  cursor: pointer;
  font-family: Open Sans;
  font-style: normal;
  border-radius: 14px;
  padding: 0.5rem;
  background: var(--color-gray2);
  display: flex;
  align-items: center;
  justify-content: flex-star;
  position: relative;
`;

const SkeletonContainer = styled.div`
  display: flex;
`;
const Circle1 = styled(Skeleton)`
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
`;
const Circle2 = styled(Circle1)`
  width: 2rem;
  height: 2rem;
  margin-right: -1rem;
  margin-top: 0.3rem;
`;

const StyledSkeleton = styled(Skeleton)`
  margin-right: 1rem;
  margin-top: 0.5rem;
`;

const NextIcon = styled(IoIosArrowBack)`
  position: relative;
  margin-right: auto;
  color: white;
  z-index: 200;
`;
