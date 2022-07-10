import { FavoriteItem, LocalStorageKeys } from '../../Interfaces';

export const scrollHandler = (
  setScroll: React.Dispatch<React.SetStateAction<number>>
) => {
  const position = window.pageYOffset;
  setScroll(position);
};
//
export function getPageNumberFromNextUrl(nextUrl: string | null) {
  if (nextUrl)
    return nextUrl.replace('https://api.bitpin.ir/v1/mkt/markets/?page=', '');
  return null;
}
//
export function addPairToFav({
  currency1Img,
  currency2Img,
  pairTitle,
  id,
}: FavoriteItem): void {
  try {
    const prevFavs =
      localStorage.getItem(LocalStorageKeys.FAVORATE_ITEMS) || null;
    const prevFavsArr: FavoriteItem[] = prevFavs ? JSON.parse(prevFavs) : [];
    localStorage.setItem(
      LocalStorageKeys.FAVORATE_ITEMS,
      JSON.stringify([
        ...prevFavsArr,
        {
          currency1Img,
          currency2Img,
          pairTitle,
          id,
        },
      ])
    );
  } catch (error) {
    throw new Error('Error in set data.');
  }
}
export function getFavoriteList(): FavoriteItem[] {
  try {
    const prevFavs =
      localStorage.getItem(LocalStorageKeys.FAVORATE_ITEMS) || null;
    return prevFavs ? JSON.parse(prevFavs) : [];
  } catch (error) {
    throw new Error('Error in get data.');
  }
}
//
export function removeItemFromFavoriteList(id: number): FavoriteItem[] {
  try {
    const prevFavs =
      localStorage.getItem(LocalStorageKeys.FAVORATE_ITEMS) || null;
    const prevFavsArr: FavoriteItem[] = prevFavs ? JSON.parse(prevFavs) : [];
    const newFavsArr: FavoriteItem[] = prevFavsArr.filter(
      (item) => item.id !== id
    );
    localStorage.setItem(
      LocalStorageKeys.FAVORATE_ITEMS,
      JSON.stringify(newFavsArr)
    );
    return prevFavs ? JSON.parse(prevFavs) : [];
  } catch (error) {
    throw new Error('Error in remove data.');
  }
}
