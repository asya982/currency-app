import { FC, useEffect, useState } from "react";
import styles from "./MainPage.module.css";
import CurrencyItem from "./components/CurrencyItem/CurrencyItem";
import { IconButton, Tooltip } from "@mui/material";
import { CurrencyExchange } from "@mui/icons-material";
import { currencyAPI } from "../../API/currencyAPI";

const MainPage: FC = () => {
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

  const fetchCurrency = async (from: string, to: string, amount: string) => {
    try {
      const { data } = await currencyAPI.convertData(from, to, amount);
      setChangedItem(Number(data.from[0].mid).toFixed(2));
    } catch (error) {}
  };

  useEffect(() => {
    if (initialItem && initialCurrency && changedCurrency) {
      fetchCurrency(changedCurrency, initialCurrency, initialItem);
    }
  }, [initialItem, initialCurrency, changedCurrency]);

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
        />
      </section>
    </article>
  );
};

export default MainPage;
