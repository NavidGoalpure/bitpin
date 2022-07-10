/* eslint-disable @typescript-eslint/no-explicit-any */

export interface FavoriteItem {
  currency1Img: string;
  currency2Img: string;
  pairTitle: string;
  id: number;
}
export enum LocalStorageKeys {
  FAVORATE_ITEMS = 'FAVORATE_ITEMS',
}
//////////////////////////////
export interface Currency {
  id: number;
  title: string;
  title_fa: string;
  code: string;
  tradable: boolean;
  for_test: boolean;
  image: string;
  decimal: number;
  decimal_amount: number;
  decimal_irt: number;
  color: string;
  high_risk: boolean;
  show_high_risk: boolean;
  withdraw_commission: string;
  tags: any[];
}

export interface OrderBookInfo {
  created_at?: any;
  price: string;
  change: number;
  min: string;
  max: string;
  time: Date;
  mean: string;
  value: string;
  amount: string;
}

export interface InternalPriceInfo {
  created_at: number;
  price: string;
  change: number;
  min: string;
  max: string;
  time?: any;
  mean?: any;
  value?: any;
  amount?: any;
}

export interface PriceInfo {
  created_at: number;
  price: string;
  change: number;
  min: string;
  max: string;
  time?: any;
  mean?: any;
  value?: any;
  amount?: any;
}

export interface CoinPair {
  id: number;
  currency1: Currency;
  currency2: Currency;
  tradable: boolean;
  for_test: boolean;
  otc_sell_percent: string;
  otc_buy_percent: string;
  otc_max_buy_amount: string;
  otc_max_sell_amount: string;
  order_book_info: OrderBookInfo;
  internal_price_info: InternalPriceInfo;
  price_info: PriceInfo;
  price: string;
  title: string;
  code: string;
  title_fa: string;
  trading_view_source: string;
  trading_view_symbol: string;
  otc_market: boolean;
  text: string;
}
