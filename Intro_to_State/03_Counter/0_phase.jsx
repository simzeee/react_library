const App = () => {
  return (
    <div className="flex text-4xl justify-center h-screen items-center">
      <button className="text-white w-8 rounded-md  bg-red-400">-</button>
      <div className="m-4 text-neutral-400">0</div>
      <button className="text-white w-8 rounded-md text-4xl bg-emerald-400">
        +
      </button>
    </div>
  );
};

export default App;