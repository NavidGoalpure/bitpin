import { ytJobsApi } from '../clients';
import { GetCoinPairListResponse } from '../interfaces';
//////////need/////////
export const getPaginateCoinPairList = async ({
  page,
}: {
  page: number;
}): Promise<GetCoinPairListResponse> => {
  const { data } = await ytJobsApi.get<GetCoinPairListResponse>(
    '/mkt/markets/',
    {
      params: {
        page,
      },
    }
  );
  return data;
};
