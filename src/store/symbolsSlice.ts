import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";
import { currencyAPI } from "../API/currencyAPI";

interface SymbolsState {
  symbols: { iso: string; currency_name: string }[];
}

const initialState: SymbolsState = {
  symbols: [],
};

export const symbolsSlice = createSlice({
  name: "symbols",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSymbols.fulfilled, (state, action) => {
      state.symbols = action.payload.map((el) => ({
        iso: el.iso,
        currency_name: el.currency_name,
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

export const getSymbols = (state: RootState) => state.symbols.symbols;

export default symbolsSlice.reducer;
