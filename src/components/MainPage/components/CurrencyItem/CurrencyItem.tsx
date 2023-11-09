import { FC } from "react";
import Input from "../../../shared/Input/Input";

const CurrencyItem: FC = () => {
  const value = "";
  const handleChange = (value: string) => {};
  return (
    <div>
      <Input {...{ handleChange, value }} />
    </div>
  );
};

export default CurrencyItem;
