import { TextField } from "@mui/material";
import { FC } from "react";

type InputProps = {
  handleChange: (value: string) => void;
  value: string;
};

const Input: FC<InputProps> = ({ value, handleChange }) => {
  return (
    <TextField
      label="Currency"
      value={value}
      onChange={(event) => handleChange(event.target.value)}
    />
  );
};

export default Input;
