import { RootState } from "../store";

export const getCarts = (state: RootState) => state.cart.results;
export const getSumTotal = (state: RootState) => state.cart.sumTotal;
export const getVat = (state: RootState) => state.cart.vat;
export const getTotal = (state: RootState) => state.cart.total;
