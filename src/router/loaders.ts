import { currencyAPI } from "../API/currencyAPI";
import { currenciesList } from "../assets/constants/currencies";

export const loadCurrenciesList = async () => {
  const currencies = currenciesList.join(",");
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const { data } = await currencyAPI.getMonthAverage(
    "UAH",
    currencies,
    year,
    month
  );

  return Object.keys(data.to).map((key) => ({
    value: data.to[key][0].monthlyAverage,
    iso: key,
  }));
};
