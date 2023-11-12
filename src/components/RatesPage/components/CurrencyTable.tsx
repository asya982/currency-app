import {
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { FC } from "react";
import { Currency } from "../../../types";

type CurrencyTableProps = {
  items: Array<Currency>;
};

const CurrencyTable: FC<CurrencyTableProps> = ({ items }) => {
  return (
    <Table>
      <TableBody>
        {items.map((el, index) => (
          <TableRow key={index}>
            <TableCell>{`${el?.currency_symbol} ${el?.iso}`}</TableCell>
            <TableCell>{el?.currency_name}</TableCell>
            <TableCell>{el?.value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CurrencyTable;
