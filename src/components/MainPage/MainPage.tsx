import { FC, useState } from "react";
import styles from "./MainPage.module.css";
import CurrencyItem from "./components/CurrencyItem/CurrencyItem";
import { IconButton, Tooltip } from "@mui/material";

const MainPage: FC = () => {
  const [initialItem, setInitialItem] = useState("");
  const [changedItem, setChangedItem] = useState("");
  const [initialCurrency, setInitialCurrency] = useState("");
  const [changedCurrency, setChangedCurrency] = useState("");

  const changeInitial = () => {};

  const changePlaces = () => {
    const [newInitial, newChanged] = [changedItem, initialItem];
    setInitialItem(newInitial);
    setChangedItem(newChanged);
  };

  const fetchCurrency = () => {
    try {
    } catch (error) {}
  };

  return (
    <article className={styles.MainPage}>
      <h1>Currency</h1>
      <section>
        <CurrencyItem
          value={initialItem}
          setCurrency={setInitialCurrency}
          setValue={setInitialItem}
          currency={initialCurrency}
          inputDisabled={false}
        />
        <Tooltip title="Change places">
          <IconButton onClick={changePlaces}></IconButton>
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
