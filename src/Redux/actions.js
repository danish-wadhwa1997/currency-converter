import { get } from "axios";

export function getData() {
  return (dispatch) => {
    get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((res) => {
        if (res.status === 200) {
          dispatch(setBitcoinDataSuccess(res.data.bpi));
        }
      })
      .catch((error) => {
        dispatch(setBitcoinDataError(error));
      });
  };
}

function setBitcoinDataSuccess(value) {
  return {
    type: "SET_BITCOIN_DATA_SUCCESS",
    payload: value,
  };
}

function setBitcoinDataError(error) {
  return {
    type: "SET_BITCOIN_DATA_ERROR",
    payload: error,
  };
}

export function setCurrency(value) {
  return (dispatch) => {
    get(
      `https://api.coindesk.com/v1/bpi/historical/close.json?currency=${value}`
    )
      .then((res) => {
        if (res.status === 200) {
          // set new currency
          dispatch(setNewCurrency(value));
          dispatch(setHistoryData(res.data["bpi"]));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

function setNewCurrency(value) {
  return {
    type: "SET_NEW_CURRENCY",
    payload: value,
  };
}

export function setHistoryData(value) {
  return {
    type: "SET_HISTORY_DATA",
    payload: value,
  };
}
