import { useState, useEffect } from "react";
import StockItem from "./StockItem";

const App = () => {
  const [stocks, setStocks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchStocks = () => {
    fetch(
      "https://api.react-formula.com/learning-api/demos/stocks-project/stocks"
    )
      .then((response) => response.json())
      .then((data) => {
        setStocks(data);
        setIsLoading(false);
      });
  };

  const stockItems = stocks.map((stock, idx) => (
    <StockItem key={idx} stock={stock}></StockItem>
  ));

  useEffect(() => {
    fetchStocks();
  }, []);

  return (
    <div className="flex justify-center bg-slate-50">
      <div className="w-full max-w-md flex justify-center min-h-screen items-center">
        {isLoading ? (
          <i className="fa-duotone fa-spinner-third text-2xl text-blue-400 animate-spin"></i>
        ) : (
          <div className="flex flex-col w-full">{stockItems}</div>
        )}
      </div>
    </div>
  );
};

export default App;
