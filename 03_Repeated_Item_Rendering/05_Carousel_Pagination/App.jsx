import PostItem from "./PostItem";
import posts from "./posts";

const App = () => {
  const postItems = posts.map((post, idx) => (
    <PostItem key={idx} post={post} />
  ));

  return (
    <div className="flex justify-center py-20">
      <div className="w-full max-w-4xl flex flex-wrap justify-center">
        {postItems}
      </div>
    </div>
  );
};

export default App;
