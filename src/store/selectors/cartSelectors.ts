import { RootState } from "../store";

export const getCarts = (state: RootState) => state.cart.results;
export const getSumTotalCarts = (state: RootState) => state.cart.sumTotal;
export const getVatCarts = (state: RootState) => state.cart.vat;
export const getTotalCarts = (state: RootState) => state.cart.total;
