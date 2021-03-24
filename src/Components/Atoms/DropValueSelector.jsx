import React from "react";
import { Row, Form } from "react-bootstrap";
export const DropValueSelector = ({
  bitValue,
  currencyChange,
  selectedCurrency,
  currencies,
}) => {
  return (
    <>
      <Row className="pt-4">
        <p style={{ color: "grey" }}>1 Bitcoin Equals</p>
      </Row>
      <Row className="pt-1 pb-2">
        <Form.Group>
          <Form.Control onChange={currencyChange} as="select">
            {currencies &&
              currencies.map((currency) => (
                <option key={currency.value} value={currency.value}>
                  {currency.name}
                </option>
              ))}
          </Form.Control>
        </Form.Group>
      </Row>
      <Row className="py-4">
        <h3>{`${bitValue || ""} ${selectedCurrency.name || ""}`}</h3>
      </Row>
    </>
  );
};

export default DropValueSelector;
