import { TextField } from "@mui/material";
import { FC } from "react";
import { debounce } from "lodash";

type InputProps = {
  handleChange: (value: string) => void;
  value: string;
  inputDisabled?: boolean;
  label?: string;
};

const Input: FC<InputProps> = ({
  value,
  handleChange,
  inputDisabled = false,
  label = "Amount",
}) => {
  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (isNaN(Number(value))) return;
    debounce(() => {
      handleChange(value);
    }, 1000);
  };
  return (
    <TextField
      label={label}
      value={value}
      onChange={changeInput}
      InputProps={{
        readOnly: inputDisabled,
      }}
      variant="standard"
      className="inputItem"
    />
  );
};

export default Input;
