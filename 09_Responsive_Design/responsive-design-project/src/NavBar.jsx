import { useState } from "react";

const NavBar = () => {
  const [isMobileMenueOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="flex justify-center bg-violet-50 shadow-md py-2 px-4">
        <div className="w-full max-w-6xl flex justify-between items-center">
          <div className="font-ubuntu text-4xl text-violet-900 flex items-center">
            <img
              className="w-24 mr-2"
              src="https://static-task-assets.react-formula.com/899963.png"
            />
            hasher
          </div>
          <div className="items-center hidden md:flex">
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
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="flex md:hidden text-4xl text-violet-950 p-4"
          >
            <i className="fa-solid fa-bars" />
          </button>
        </div>
      </div>
      {isMobileMenueOpen && (
        <div className="fixed top-0 right-0 flex flex-col bg-violet-950 pt-12 pb-4 rounded-bl-lg">
          <button className="flex text-2xl text-violet-200 pl-6 py-4 pr-20">
            Home
          </button>
          <button className="flex text-2xl text-violet-200 pl-6 py-4 pr-20">
            About
          </button>
          <button className="flex text-2xl text-violet-200 pl-6 py-4 pr-20">
            Contact
          </button>
          <button onClick={()=> setIsMobileMenuOpen(false)}>
            <i className="fa-regular fa-circle-xmark text-violet-400 text-4xl absolute top-0 right-0 p-2" />
          </button>
        </div>
      )}
    </>
  );
};

export default NavBar;
