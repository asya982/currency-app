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
  const [changedItem, setChangedItem] = useState("");
  const [initialCurrency, setInitialCurrency] = useState("");
  const [changedCurrency, setChangedCurrency] = useState("");

  const changePlaces = () => {
    const [newInitial, newChanged, newInitialCurrency, newChangedCurrency] = [
      changedItem,
      initialItem,
      changedCurrency,
      initialCurrency,
    ];
    setInitialItem(newInitial);
    setChangedItem(newChanged);
    setInitialCurrency(newInitialCurrency);
    setChangedCurrency(newChangedCurrency);
  };

  const fetchCurrency = async (from: string, to: string, amount: number) => {
    try {
      const { data } = await currencyAPI.convertData(from, to, amount);
      setChangedItem(data.to[0].mid);
    } catch (error) {}
  };

  const syncCurrency = (param: string, value: string): void => {
    const currentParam = searchParams.get(param);
    if (currentParam !== value) {
      searchParams.set(param, value);
    }
  };

  useEffect(() => {
    if (initialItem && initialCurrency && changedCurrency) {
      fetchCurrency(initialCurrency, changedCurrency, Number(initialItem));
    }
  }, [initialItem, initialCurrency, changedCurrency]);

  useEffect(() => {
    syncCurrency("from", initialCurrency);
    syncCurrency("to", changedCurrency);
  }, [initialCurrency, changedCurrency]);

  return (
    <article className={styles.MainPage}>
      <h1>Currency</h1>
      <section className={styles.currencyFields}>
        <CurrencyItem
          value={initialItem}
          setCurrency={setInitialCurrency}
          setValue={setInitialItem}
          currency={initialCurrency}
          inputDisabled={false}
        />
        <Tooltip title="Change places" arrow>
          <IconButton onClick={changePlaces} className={styles.revertBtn}>
            <CurrencyExchange color="inherit" />
          </IconButton>
        </Tooltip>
        <CurrencyItem
          value={changedItem}
          setCurrency={setChangedCurrency}
          setValue={setChangedItem}
          currency={changedCurrency}
          inputDisabled={true}
          label="Converted value"
        />
      </section>
    </article>
  );
};

export default MainPage;
