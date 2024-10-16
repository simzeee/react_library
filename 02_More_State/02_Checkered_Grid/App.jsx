import Square from "./Square.jsx";

const App = () => {
  const squares = [];
  for (let i = 0; i < 400; i++) {
    squares.push(<Square key={i} />);
  }
  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap content-start mt-4 border border-black w-[602px] h-[602px]">
        {squares}
      </div>
    </div>
  );
};
export default App;
