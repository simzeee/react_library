import { useState } from "react";
import PostItem from "./PostItem";
import posts from "./posts";

const PAGE_SIZE = 9;

const App = () => {
  const [pageIndex, setPageIndex] = useState(0);

  const postItems = posts
    .slice(PAGE_SIZE * pageIndex, PAGE_SIZE * (pageIndex + 1))
    .map((post, idx) => <PostItem key={idx} post={post} />);

  const numPages = Math.ceil(posts.length / PAGE_SIZE);
  const buttons = [];

  for (let i = 0; i < numPages; i += 1) {
    buttons.push(
      <button
        onClick={() => {
          setPageIndex(i);
        }}
        key={i}
        className="bg-gray-400 text-white text-small w-4 m-1"
      >
        {i + 1}
      </button>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="w-full max-w-4xl flex flex-wrap justify-center">
        {postItems}
      </div>
      <div>{buttons}</div>
    </div>
  );
};

export default App;
