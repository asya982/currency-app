import { FC } from "react";
import Input from "../../../shared/Input/Input";
import { useSelector } from "react-redux";
import { getSymbols } from "../../../../store/symbolsSlice";
import styles from "./CurrencyItem.module.css";
import Select from "../../../shared/Select/Select";

type CurrencyItemProps = {
  currency: string;
  setCurrency: (currency: string) => void;
  setValue: (currency: string) => void;
  value: string;
  inputDisabled?: boolean;
  label?: string;
};

const CurrencyItem: FC<CurrencyItemProps> = ({
  currency,
  setCurrency,
  setValue,
  value,
  inputDisabled,
  label,
}) => {
  const symbols = useSelector(getSymbols);
  const initialCurrency =
    symbols.find((symbol) => symbol.iso === currency) || null;

  return (
    <>
      {symbols.length && (
        <div className={styles.item}>
          <Input {...{ handleChange: setValue, value, inputDisabled, label }} />
          <Select getOptionLabel={(option) => option.iso} value={initialCurrency} options={symbols} changeValue={(newValue) => newValue && setCurrency(newValue?.iso)} />
        </div>
      )}
    </>
  );
};

export default CurrencyItem;
