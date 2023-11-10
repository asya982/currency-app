import { FC } from "react";
import Input from "../../../shared/Input/Input";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useSelector } from "react-redux";
import { getSymbols } from "../../../../store/symbolsSlice";

type CurrencyItemProps = {
  currency: string;
  setCurrency: (currency: string) => void;
  setValue: (currency: string) => void;
  value: string;
  inputDisabled: boolean;
};

const CurrencyItem: FC<CurrencyItemProps> = ({
  currency,
  setCurrency,
  setValue,
  value,
  inputDisabled,
}) => {
  const symbols = useSelector(getSymbols);
  return (
    <div>
      <Input {...{ handleChange: setValue, value, inputDisabled }} />
      <FormControl>
        <InputLabel id="select-currency-label">Currency</InputLabel>
        <Select
          value={currency}
          label="Currency"
          onChange={(e) => setCurrency(e.target.value)}
        >
          {symbols.length &&
            symbols?.map((el, index) => (
              <MenuItem value={el.iso} key={index} selected={index === 0}>
                {el.iso}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default CurrencyItem;
