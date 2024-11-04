import clsx from "clsx";

const StockItem = (props) => {
  const { stock } = props;

  const priceDiff = stock.current_price - stock.previous_price;
  const percentChange = (priceDiff / stock.previous_price) * 100;

  return (
    <div className="flex justify-between border border-slate-200 m-2 p-4 bg-white">
      <div>
        <div className="text-slate-600">{stock.name}</div>
        <div className="text-blue-500 text-2xl">{stock.symbol}</div>
      </div>
      <div className="flex flex-col items-end">
        <div
          className={clsx(
            "rounded-full p-1 w-16 text-center",
            percentChange >= 0
              ? "text-green-700 bg-green-200"
              : "bg-red-200 text-red-700"
          )}
        >
          {percentChange.toFixed(2)}%
        </div>
        <div className="text-slate-600 text-xl">
          ${stock.current_price / 100}
        </div>
      </div>
    </div>
  );
};

export default StockItem;
