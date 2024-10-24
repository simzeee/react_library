const SongItem = (props) => {
  const { song } = props;

  const minutes = Math.floor(song.duration / 60);
  const seconds = String(song.duration % 60);
  return (
    <div className="flex m-4 p-4 bg-purple-400 justify-between rounded-lg text-purple-200">
      <div className="flex items-center">
        <i className="fa-solid fa-play-circle text-3xl mr-2 text-purple-600 cursor-pointer"></i>
        <div>
          <div className="text-2xl text-white">{song.title}</div>
          <div>{song.artist}</div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div>{song.album}</div>
        <div>
          {minutes}:{seconds.padStart(2, "0")}
        </div>
      </div>
    </div>
  );
};

export default SongItem;
