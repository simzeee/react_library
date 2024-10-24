import SongItem from "./SongItem";
import songs from "./songs";

const App = () => {
  const songItems = songs.map((song, idx) => (
    <SongItem key={idx} song={song}></SongItem>
  ));

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-2xl">{songItems}</div>
    </div>
  );
};

export default App;
