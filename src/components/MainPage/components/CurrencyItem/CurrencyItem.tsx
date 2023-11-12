import { FC } from "react";
import Input from "../../../shared/Input/Input";
import { Autocomplete, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { getSymbols } from "../../../../store/symbolsSlice";
import styles from "./CurrencyItem.module.css";

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
          <Autocomplete
            id="currency-select"
            options={symbols}
            renderInput={(params) => (
              <TextField
                variant="standard"
                color="secondary"
                {...params}
                label="Currency"
                sx={{ width: "fit-content" }}
              />
            )}
            getOptionLabel={(option) => option.iso}
            onChange={(e, newValue) => newValue && setCurrency(newValue?.iso)}
            value={initialCurrency}
            sx={{ width: "fit-content" }}
          />
        </div>
      )}
    </>
  );
};

export default CurrencyItem;
