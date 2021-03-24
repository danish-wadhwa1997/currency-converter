import React from "react";
import { Provider } from "react-redux";
import store from "./Redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import CurrencyView from "./Components/Molecules/CurrencyView";
export const App = (props) => {
  return (
    <Provider store={store}>
      <CurrencyView />
    </Provider>
  );
};

export default App;
