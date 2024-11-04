import { useState, useEffect } from "react";

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

  useEffect(() => {
    fetchStocks();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-lg flex justify-center min-h-screen items-center">
        {isLoading ? (
          <i className="fa-duotone fa-spinner-third text-2xl text-blue-400 animate-spin"></i>
        ) : (
          <div>todo</div>
        )}
      </div>
    </div>
  );
};

export default App;
