import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import DropValueSelector from "../Atoms/DropValueSelector";
import LineChart from "../Atoms/LineChart";
import { getData, setCurrency, setHistoryData } from "../../Redux/actions";
import { get } from "axios";
export const CurrencyView = (props) => {
  const dispatch = useDispatch();

  const selectedCurrency = useSelector((state) => state.selectedCurrency);
  React.useEffect(() => {
    dispatch(getData());
    get(
      `https://api.coindesk.com/v1/bpi/historical/close.json?currency=${selectedCurrency.value}`
    )
      .then((res) => {
        if (res.status === 200) {
          dispatch(setHistoryData(res.data["bpi"]));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const bitValue = useSelector((state) => state.bitcoinData);
  const historyData = useSelector((state) => state.historyData);

  const handleCurrencyChange = (e) => {
    dispatch(setCurrency(e.target.value));
  };
  const currencies = useSelector((state) => state.currencies);
  return (
    <Container>
      <Row>
        <Col className="p-5">
          <DropValueSelector
            currencyChange={handleCurrencyChange}
            selectedCurrency={selectedCurrency}
            currencies={currencies}
            bitValue={
              bitValue[selectedCurrency.value]
                ? bitValue[selectedCurrency.value].rate_float
                : ""
            }
          />
        </Col>
        <Col className="p-5">
          <LineChart
            data={historyData || []}
            title="Last 60 Days Trend"
            color="#70CAD1"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default CurrencyView;
