const NavBar = () => {
  return (
    <div className="flex justify-center bg-violet-50 shadow-md py-2 px-4">
      <div className="w-full max-w-6xl flex justify-between items-center">
        <div className="font-ubuntu text-4xl text-violet-900 flex items-center">
          <img
            className="w-24 mr-2"
            src="https://static-task-assets.react-formula.com/899963.png"
          />
          hasher
        </div>
        <div className="">
          <button className="text-violet-900 mx-4 text-xl font-medium">
            Home
          </button>
          <button className="text-violet-900 mx-4 text-xl font-medium">
            About
          </button>
          <button className="text-violet-900 mx-4 text-xl font-medium">
            Contact
          </button>
          <button>
            <i className="fa-solid fa-magnifying-glass text-2xl text-red-700 mx-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
