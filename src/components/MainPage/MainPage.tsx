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
  const [initialCurrency, setInitialCurrency] = useState(
    searchParams.get("from") || ""
  );
  const [changedCurrency, setChangedCurrency] = useState(
    searchParams.get("to") || ""
  );

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
    } catch (error: any) {
      setError(error.message);
    }
  };

  const syncCurrency = (param: string, value: string): void => {
    if (!value) return;
    const currentParam = searchParams.get(param);
    if (currentParam !== value) {
      setSearchParams({
        ...Object.fromEntries([...searchParams]),
        [param]: value,
      });
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
            <CurrencyExchange color="secondary" />
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
      {error && <p>{error}</p>}
    </article>
  );
};

export default MainPage;
