import { ReactNode } from 'react';
import PairCardSkeleton from './PairCardSkeleton';

const CardSkeletons: React.FC = () => {
  const skeletonList: ReactNode[] = [];
  for (let index = 0; index < 9; index++) {
    skeletonList.push(<PairCardSkeleton key={`skeleton${index}`} />);
  }

  return <>{skeletonList}</>;
};
export default CardSkeletons;
