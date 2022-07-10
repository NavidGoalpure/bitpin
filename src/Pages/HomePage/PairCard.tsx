import React from 'react';
import styled from 'styled-components/macro';
import { IoIosArrowBack } from 'react-icons/io';
import { fadeOutAnimation } from '../../Styles/Animation';
import { Link } from 'react-router-dom';
import { Body12Style } from '../../Elements/Typo';
import { AiFillStar } from 'react-icons/ai';
import { addPairToFav, removeItemFromFavoriteList } from './utils';
import { FavoriteItem } from '../../Interfaces';
import ErrorToast from '../../Elements/Toast/Error';
import SuccessToast from '../../Elements/Toast/Success';

interface Props extends FavoriteItem {
  isFavorite: boolean;
}
const PairCard: React.FC<Props> = ({
  currency1Img,
  currency2Img,
  pairTitle,
  id,
  isFavorite,
}) => {
  return (
    <Container>
      <FavoriteContainer
        isFavorite={isFavorite}
        onClick={() => {
          try {
            if (isFavorite) {
              removeItemFromFavoriteList(id);
              SuccessToast(
                'این جفت ارز از  لیست محبوب شما حذف شد. بعد از رفرش، صفحه تغییرات را مشاهده میکنید'
              );
            } else {
              addPairToFav({
                currency1Img,
                currency2Img,
                pairTitle,
                id,
              });
              SuccessToast(
                'این جفت ارز به لیست محبوب شما اضافه شد. بعد از رفرش، آن را در ابتدا لیست خواهید دید'
              );
            }
          } catch (error) {
            ErrorToast('متاسفانه مشکلی پیش امده است');
          }
        }}
      >
        <Favorite isFavorite={isFavorite} />
      </FavoriteContainer>
      <Wrapper to={id.toString()} isFavorite={isFavorite}>
        <CurrencyImgContainer>
          <Img src={currency1Img} loading='lazy' />
          <Img2 src={currency2Img} loading='lazy' />
        </CurrencyImgContainer>
        <Buy>خرید/ فروش</Buy>
        <PairTitle>{pairTitle}</PairTitle>
        <NextIcon size={30} />
      </Wrapper>
    </Container>
  );
};

export default PairCard;

const Container = styled.div`
  position: relative;
  margin: 0 1rem 1rem;
  width: 30%;
  height: 4rem;
`;
const FavoriteContainer = styled.div<{ isFavorite: boolean }>`
  width: 2rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  position: absolute;
  right: -1.7rem;
  bottom: 0.3rem;
  border-radius: 8px;
  z-index: 0;
  justify-content: center;
  background-color: var(--color-gray3);
  cursor: pointer;

  transform: ${({ isFavorite }) =>
    isFavorite ? ' translateX(0rem)' : ' translateX(-3rem)'};
  transition: all 0.3s cubic-bezier(0.55, 0.06, 0.61, 1);
  ${Container}:hover & {
    filter: drop-shadow(2px 4px 6px var(--color-gray2));
    transition: all 0.3s cubic-bezier(0.55, 0.06, 0.61, 1);
    transform: translateX(0);
  }
`;
const Favorite = styled(AiFillStar)<{ isFavorite: boolean }>`
  color: ${({ isFavorite }) => (isFavorite ? 'yellow' : 'var(--color-gray1)')};
  transition: all 0.5s ease;
  ${FavoriteContainer}:hover & {
    transition: all 0.5s ease;
    transform: rotate(144deg);
  }
`;
const Wrapper = styled(Link)<{ isFavorite: boolean }>`
  filter: drop-shadow(2px 4px 6px black);
  width: 100%;
  height: 100%;
  cursor: pointer;
  font-family: Open Sans;
  font-style: normal;
  border: 1px solid
    ${({ isFavorite }) => (isFavorite ? 'yellow' : 'var(--color-gray5)')};
  border-radius: 14px;
  padding: 0.5rem;
  background: var(--color-gray2);
  display: flex;
  align-items: center;
  justify-content: flex-star;
  position: relative;
`;
const Img = styled.img`
  width: 2rem;
  height: 2rem;
`;
const Img2 = styled(Img)`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: -1rem;
  margin-top: 0.3rem;
  transition: all 0.3s cubic-bezier(0.55, 0.06, 0.61, 1);
  ${Container}:hover & {
    width: 1.9rem;
    height: 1.9rem;
    margin-right: 0.2rem;
    margin-top: 0;
    transition: all 0.3s cubic-bezier(0.55, 0.06, 0.61, 1);
  }
`;
const CurrencyImgContainer = styled.div`
  margin-left: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 1rem;
`;
const Buy = styled.h2`
  ${Body12Style}
  color: white;
  position: absolute;
  right: 0;
  bottom: 38%;
  opacity: 0;
  white-space: nowrap;
  transition: all 0.4s cubic-bezier(0.55, 0.06, 0.61, 1);
  ${Container}:hover & {
    opacity: 1;
    transform: translateX(-6rem);
    transition: all 0.3s cubic-bezier(0.55, 0.06, 0.61, 1);
  }
`;
const PairTitle = styled.h2`
  ${Body12Style};
  color: white;
  width: max-content;
  transition: all 0.3s cubic-bezier(0.55, 0.06, 0.61, 1);
  white-space: nowrap;
  ${Container}:hover & {
    ${fadeOutAnimation}
    width: 0;
    opacity: 0;
    margin-right: 2rem;
    transition-delay: 0.6s;
  }
`;
const NextIcon = styled(IoIosArrowBack)`
  position: relative;
  margin-right: auto;
  color: white;
  z-index: 200;
`;
