import { Autocomplete, TextField } from "@mui/material";
import { FC } from "react";
import { Symbol } from "../../../types";

type SelectProps = {
  options: any[];
  changeValue: (arg: any) => void;
  value: string | Symbol | null;
  getOptionLabel: (option: any) => any;
};

const Select: FC<SelectProps> = ({
  changeValue,
  options,
  value,
  getOptionLabel,
}) => {
  return (
    <Autocomplete
      id="currency-select"
      renderInput={(params) => (
        <TextField variant="standard" {...params} label="Currency" />
      )}
      onChange={(e, newValue) => changeValue(newValue)}
      sx={{ width: "100px" }}
      {...{ value, options, getOptionLabel }}
    />
  );
};

export default Select;
