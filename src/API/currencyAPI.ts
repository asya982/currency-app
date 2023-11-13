import { axiosInstance, baseRequest } from ".";

export const currencyAPI = {
  async convertData(from: string, to: string, amount: number) {
    const params = {
      from,
      to,
      amount,
      decimal_places: 2,
    };
    return baseRequest(() => axiosInstance.get("convert_from", { params }));
  },

  async getSymbols() {
    return baseRequest(() =>
      axiosInstance.get(`currencies?additionalInfo=symbol`)
    );
  },

  async centralBankRates(central_bank: string, amount: number) {
    const params = { central_bank, to: "*", amount, decimal_places: 2 };
    return baseRequest(() =>
      axiosInstance.get("central_bank_rate", { params })
    );
  },
};
