import React from 'react';
import styled from 'styled-components/macro';
import ErrorToast from '../../Elements/Toast/Error';
import { useInfiniteQuery } from 'react-query';

import { Button } from '../../Elements/Button';
import { getPaginateCoinPairList } from '../../api/fetchers';
import { GetCoinPairListResponse } from '../../api/interfaces';
import PairCard from './PairCard';
import { getFavoriteList, getPageNumberFromNextUrl } from './utils';
import FavoriteList from './FavoriteList';
import CardSkeletons from './CardSkeletons';
import { Body16Style } from '../../Elements/Typo';

const CartsSection = () => {
  const {
    fetchNextPage,
    hasNextPage,
    isError,
    isFetchingNextPage,
    isFetching,
    data: paginateData,
  } = useInfiniteQuery<GetCoinPairListResponse, Error>(
    ['GetCoinPairs', { limit: 200 }],

    ({ pageParam = 1 }) => getPaginateCoinPairList({ page: pageParam }),
    {
      getNextPageParam: (lastPage) => {
        return getPageNumberFromNextUrl(lastPage.next);
      },
    }
  );
  if (isError) {
    ErrorToast('Something went wrong');
  }
  const favList = getFavoriteList();

  return (
    <Container>
      <CardContainer>
        <FavoriteList />
        <Title>لیست کامل</Title>

        {isFetching && !paginateData?.pages?.length ? <CardSkeletons /> : null}

        {paginateData?.pages.map((group, i) => {
          return (
            <React.Fragment key={i}>
              {group.results?.map((pairCardData) => {
                const isInFavList =
                  favList.filter((item) => item.id === pairCardData.id)
                    .length === 0;
                if (isInFavList) {
                  return (
                    <PairCard
                      key={pairCardData.id}
                      id={pairCardData.id}
                      currency1Img={pairCardData?.currency1?.image || ''}
                      currency2Img={pairCardData?.currency2?.image || ''}
                      pairTitle={pairCardData?.title_fa || ''}
                      isFavorite={false}
                    />
                  );
                }
              })}
            </React.Fragment>
          );
        })}
      </CardContainer>

      {hasNextPage && (
        <LoadMoreButton
          isLoading={isFetchingNextPage}
          onClick={() => fetchNextPage()}
        >
          Load More
        </LoadMoreButton>
      )}
    </Container>
  );
};
export default CartsSection;

const Container = styled.section`
  position: relative;
  width: 100%;
  padding: 0 1rem;
`;
const Title = styled.h2`
  ${Body16Style}
  margin-top: 2rem;
  width: 100%;
  text-align: right;
  font-size: 20px;
  font-weight: bold;
  margin-right: 1rem;
  margin-bottom: 1rem;
`;
const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 3rem;
`;
const LoadMoreButton = styled(Button)`
  margin: 0 auto 2rem;
`;
