import { TextField } from "@mui/material";
import { FC } from "react";

type InputProps = {
  handleChange: (value: string) => void;
  value: string;
  inputDisabled?: boolean;
};

const Input: FC<InputProps> = ({
  value,
  handleChange,
  inputDisabled = false,
}) => {
  return (
    <TextField
      label="Amount"
      value={value}
      onChange={(event) => handleChange(event.target.value)}
      disabled={inputDisabled}
    />
  );
};

export default Input;
