import styled from 'styled-components/macro';
import { Body16Style } from '../../Elements/Typo';
import PairCard from './PairCard';
import { getFavoriteList } from './utils';

const FavoriteList = () => {
  const favList = getFavoriteList();
  return (
    <>
      <Title>جفت ارزهای محبوب</Title>
      {favList.map((pairCard) => (
        <PairCard
          key={pairCard.id}
          id={pairCard.id}
          currency1Img={pairCard?.currency1Img || ''}
          currency2Img={pairCard?.currency2Img || ''}
          pairTitle={pairCard?.pairTitle || ''}
          isFavorite={true}
        />
      ))}
    </>
  );
};
export default FavoriteList;
const Title = styled.h2`
  ${Body16Style}
  font-family: Open Sans;
  font-style: normal;
  font-size: 20px;
  font-weight: bold;
  color: var(--color-gray1);
  width: 100%;
  text-align: right;
  margin-right: 1rem;
  margin-bottom: 1rem;
`;
