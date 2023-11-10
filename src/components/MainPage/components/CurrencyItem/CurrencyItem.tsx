import { FC } from "react";
import Input from "../../../shared/Input/Input";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

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
  inputDisabled
}) => {
  return (
    <div>
      <Input {...{ handleChange: setValue, value, inputDisabled }} />
      <FormControl fullWidth>
        <InputLabel id="select-currency-label">Currency</InputLabel>
        <Select
          value={currency}
          label="Currency"
          onChange={(e) => setCurrency(e.target.value)}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default CurrencyItem;
