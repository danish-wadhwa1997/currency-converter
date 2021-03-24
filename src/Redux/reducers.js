export default function rootReducer(state = [], action) {
  switch (action.type) {
    case "SET_BITCOIN_DATA_SUCCESS":
      return { ...state, bitcoinData: action.payload };
    case "SET_BITCOIN_DATA_ERROR":
      return { ...state, bitcoinData: {} };

    case "SET_NEW_CURRENCY":
      let newCurrency = state.currencies.find(
        (currency) => currency.value === action.payload
      );
      return { ...state, selectedCurrency: newCurrency };

    case "SET_HISTORY_DATA":
      return { ...state, historyData: action.payload };

    default:
      return state;
  }
}
