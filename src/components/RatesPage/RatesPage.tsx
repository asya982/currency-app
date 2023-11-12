import React, { FC, useState } from "react";
import styles from "./RatesPage.module.css";
import CurrencyItem from "../MainPage/components/CurrencyItem/CurrencyItem";

const RatesPage: FC = () => {
  const [value, setValue] = useState("");
  const [currency, setCurrency] = useState("");
  return (
    <section className={styles.ratesPage}>
      <CurrencyItem {...{ currency, setCurrency, setValue, value }} />
    </section>
  );
};

export default RatesPage;
