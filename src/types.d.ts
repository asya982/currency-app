export type Symbol = {
  iso: string;
  currency_name: string;
  currency_symbol: string;
};
export type Currency = {
  iso: string;
  currency_name: string;
  currency_symbol: string;
  value: number;
};

export type FetchedList = Omit<Currency, "currency_symbol" | "currency_name">;
