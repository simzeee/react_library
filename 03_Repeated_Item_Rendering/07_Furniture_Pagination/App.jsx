import { useState } from "react";
import FurnitureItem from "./FurnitureItem";
import furnitures from "./furnitures";
import clsx from "clsx";

const PAGE_SIZE = 5;

const App = () => {
  const [pageIndex, setPageIndex] = useState(0);

  const furnitureItems = furnitures
    .slice(PAGE_SIZE * pageIndex, PAGE_SIZE * (pageIndex + 1))
    .map((furniture, idx) => <FurnitureItem furniture={furniture} key={idx} />);

  const numPages = Math.ceil(furnitures.length / PAGE_SIZE);
  const pageButtons = [];
  for (let i = 0; i < numPages; i++) {
    pageButtons.push(
      <button
        onClick={() => setPageIndex(i)}
        className={clsx(
          "w-4 mx-1 text-sm rounded-sm",
          pageIndex == i
            ? "bg-rose-300 text-rose-600 border border-rose-500"
            : "bg-stone-300 text-stone-600"
        )}
        key={i}
      >
        {i + 1}
      </button>
    );
  }

  return (
    <div className="flex flex-col items-center py-64 bg-stone-100">
      <div className="mx-4 mb-10 text-4xl text-stone-600 ">
        Autumn's Fabulous Furniture
      </div>

      <div className="w-full max-w-2xl">
        <div className="flex justify-end px-8 py-2 border-b border-stone-300">
          {pageButtons}
        </div>
        {furnitureItems}
      </div>
    </div>
  );
};

export default App;
