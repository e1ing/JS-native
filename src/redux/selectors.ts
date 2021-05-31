import {IGlobalState} from "./state";

//interface IRootState extends IGlobalState{}

export const selectAllState = (state: IGlobalState) => state.currency;
export const selectCurrencies = (state: IGlobalState) => state.currency.currencies;