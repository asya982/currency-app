import { FC, useEffect, useState } from "react";
import styles from "./MainPage.module.css";
import CurrencyItem from "./components/CurrencyItem/CurrencyItem";
import { IconButton, Tooltip } from "@mui/material";
import { CurrencyExchange } from "@mui/icons-material";
import { currencyAPI } from "../../API/currencyAPI";
import { useSearchParams } from "react-router-dom";

const MainPage: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [initialItem, setInitialItem] = useState("");
  const [changedItem, setChangedItem] = useState("0");
  const [error, setError] = useState(null);

  const convertTo = searchParams.get("to") || "";
  const convertFrom = searchParams.get("from") || "";
  

  const changePlaces = () => {
    const [newInitial, newChanged, newInitialCurrency, newChangedCurrency] = [
      changedItem,
      initialItem,
      convertTo,
      convertFrom,
    ];
    setInitialItem(newInitial);
    setChangedItem(newChanged);
    setSearchParams({ from: newInitialCurrency, to: newChangedCurrency });
  };

  const fetchCurrency = async (from: string, to: string, amount: number) => {
    try {
      const { data } = await currencyAPI.convertData(from, to, amount);
      setChangedItem(data.to[0].mid);
    } catch (error: any) {
      setError(error.message);
    }
  };

  const syncCurrency = (param: string, value: string): void => {
    if (!value) return;
    setSearchParams({
      ...Object.fromEntries([...searchParams]),
      [param]: value,
    });
  };

  useEffect(() => {
    if (initialItem && convertFrom && convertTo) {
      fetchCurrency(convertFrom, convertTo, Number(initialItem));
    }
  }, [initialItem, convertFrom, convertTo]);

  return (
    <article className={styles.MainPage}>
      <h1>Currency</h1>
      <section className={styles.currencyFields}>
        <CurrencyItem
          value={initialItem}
          setCurrency={(currency: string) => syncCurrency("from", currency)}
          setValue={setInitialItem}
          currency={convertFrom}
          inputDisabled={false}
        />
        <Tooltip title="Change places" arrow>
          <IconButton onClick={changePlaces} className={styles.revertBtn}>
            <CurrencyExchange color="secondary" />
          </IconButton>
        </Tooltip>
        <CurrencyItem
          value={changedItem}
          setCurrency={(currency: string) => syncCurrency("to", currency)}
          setValue={setChangedItem}
          currency={convertTo}
          inputDisabled={true}
          label="Converted value"
        />
      </section>
      {error && <p>{error}</p>}
    </article>
  );
};

export default MainPage;
