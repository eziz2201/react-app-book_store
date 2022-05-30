import { RootState } from "../store";

export const getCarts = (state: RootState) => state.cart.cart.results;
export const getSumTotalCarts = (state: RootState) => state.cart.cart.sumTotal;
export const getVatCarts = (state: RootState) => state.cart.cart.vat;
export const getTotalCarts = (state: RootState) => state.cart.cart.total;
