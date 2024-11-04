import { useState, useEffect } from "react";
import StockItem from "./StockItem";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [stocks, setStocks] = useState([]);

  const fetchStocks = async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://api.react-formula.com/learning-api/demos/stocks-project/stocks"
    );
    const data = await response.json();
    setStocks(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchStocks();
  }, []);

  const stockItems = stocks.map((stock, idx) => (
    <StockItem stock={stock} key={idx} />
  ));

  return (
    <div className="flex items-center justify-center min-h-screen pt-20 bg-slate-50">
      {isLoading ? (
        <i className="text-2xl text-blue-400 fad fa-spinner-third animate-spin"></i>
      ) : (
        <div className="flex flex-col w-full max-w-sm">{stockItems}</div>
      )}
    </div>
  );
};

export default App;
