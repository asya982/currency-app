import { Slice, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";
import { currencyAPI } from "../API/currencyAPI";
import { Symbol } from "../types";

interface SymbolsState {
  symbols: Symbol[];
}

const initialState: SymbolsState = {
  symbols: [],
};

export const symbolsSlice: Slice = createSlice({
  name: "symbols",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSymbols.fulfilled, (state, action) => {
      state.symbols = action.payload.map((el) => ({
        iso: el.iso,
        currency_name: el.currency_name,
        currency_symbol: el.currency_symbol,
      }));
    });
  },
});

export const fetchSymbols = createAsyncThunk(
  "symbols/fetchSymbols",
  async (): Promise<any[]> => {
    const { data } = await currencyAPI.getSymbols();
    return data.currencies;
  }
);

export const getSymbols = (state: RootState): Symbol[] => state.symbols.symbols;

export default symbolsSlice.reducer;
