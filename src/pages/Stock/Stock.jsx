import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Stock.css";
const Stock = (props) => {
  const apiKey = "780df77fe2ae515e56a059cee313a547";
  const params = useParams();
  const symbol = params.symbol;
  const url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=780df77fe2ae515e56a059cee313a547`;

  const [stockData, setStockData] = useState(null);

  const getStock = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setStockData(data);
  };

  useEffect(() => {
    getStock();
  }, []);

  return (
    <div className="stock">
      {!stockData ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <h1>{symbol}</h1>
          <h2>{stockData[0].price}</h2>
        </div>
      )}
    </div>
  );
};

export default Stock;
