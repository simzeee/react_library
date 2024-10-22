import PlayingCard from "./PlayingCard";

const App = () => {
  return (
    <div className="flex justify-center">
      <PlayingCard value="A" icon="fa-heart" color="text-red-500" />
      <PlayingCard value="10" icon="fa-spade" color="text-black" />
      <PlayingCard value="2" icon="fa-diamond" color="text-red-500" />
      <PlayingCard value="6" icon="fa-club" color="text-black-500" />
    </div>
  );
};

export default App;
