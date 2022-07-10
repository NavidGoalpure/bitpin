import { CoinPair } from '../../Interfaces';

export interface RoutinErrorResponse {
  message: string;
}

export interface PaginateQueryResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}
export type GetCoinPairListResponse = PaginateQueryResponse<CoinPair>;
