import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

const initialState = {
  currencies: [
    {
      name: "United States Dollar",
      value: "USD",
    },
    {
      name: "British Pound Sterling",
      value: "GBP",
    },
    {
      name: "Euro",
      value: "EUR",
    },
  ],
  historyData: {},
  bitcoinData: {},
  selectedCurrency: {
    name: "United States Dollar",
    value: "USD",
  },
};
const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
