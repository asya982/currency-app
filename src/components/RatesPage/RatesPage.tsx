import { FC, useEffect, useState } from "react";
import styles from "./RatesPage.module.css";
import CurrencyItem from "../MainPage/components/CurrencyItem/CurrencyItem";
import CurrencyTable from "./components/CurrencyTable";
import { useSelector } from "react-redux";
import { getSymbols } from "../../store/symbolsSlice";
import { currencyAPI } from "../../API/currencyAPI";
import { Currency, FetchedList } from "../../types";
import { currenciesList } from "../../assets/constants/currencies";

const RatesPage: FC = () => {
  const [value, setValue] = useState("100");
  const [currency, setCurrency] = useState("UAH");
  const symbols = useSelector(getSymbols);

  const formatList = (list: FetchedList[]) =>
    list.map((el) => {
      const symbolData = symbols.find((symbol) => symbol.iso === el.iso);
      return {
        ...el,
        currency_symbol: symbolData?.currency_symbol || "",
        currency_name: symbolData?.currency_name || "",
        iso: symbolData?.iso || "",
      };
    });

  const [currencyList, setCurrencyList] = useState<Currency[]>([]);

  const fetchConvert = async (
    from: string,
    to: string,
    amount: number
  ): Promise<void> => {
    const { data } = await currencyAPI.convertData(from, to, amount);
    const listToFormat = data.to.map(
      (el: { mid: number; quotecurrency: string }) => ({
        iso: el.quotecurrency,
        value: el.mid,
      })
    );
    setCurrencyList(formatList(listToFormat));
  };

  useEffect(() => {
    if (symbols.length) {
      fetchConvert(currency, currenciesList.join(","), Number(value));
    }
  }, [value, currency, symbols]);

  return (
    <section className={styles.ratesPage}>
      <h1>Get exchange for most popular currencies</h1>
      <CurrencyItem {...{ currency, setCurrency, setValue, value }} />
      {symbols.length && currenciesList.length && (
        <CurrencyTable items={currencyList} />
      )}
    </section>
  );
};

export default RatesPage;
