import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  TableContainer,
  Paper,
} from "@mui/material";
import { FC } from "react";
import { Currency } from "../../../types";

type CurrencyTableProps = {
  items: Array<Currency>;
};

const CurrencyTable: FC<CurrencyTableProps> = ({ items }) => {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: "80vw" }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Symbol</TableCell>
            <TableCell>ISO</TableCell>
            <TableCell>Full name</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((el, index) => (
            <TableRow key={index}>
              <TableCell>{el?.currency_symbol}</TableCell>
              <TableCell>{el?.iso}</TableCell>
              <TableCell>{el?.currency_name}</TableCell>
              <TableCell>{el?.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CurrencyTable;
