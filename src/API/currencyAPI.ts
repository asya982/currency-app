import { axiosInstance, baseRequest } from ".";

export const currencyAPI = {
  async convertData(from: string, to: string, amount: string) {
    const params = {
      from,
      to,
      amount,
    };
    return baseRequest(() => axiosInstance.get("convert_to", { params }));
  },

  async getSymbols() {
    return baseRequest(() => axiosInstance.get(`currencies`));
  },
};
