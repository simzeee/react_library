import { useState } from "react";
import CookieRecipe from "./CookieRecipe";
import Modal from "./Modal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="bg-blue-700 flex py-4 justify-center">
        <div className="flex justify-between w-full max-w-4xl text-slate-300 px-4">
          <div className="text-2xl">John's Recipe</div>
          <button onClick={() => setIsModalOpen(true)}>
            <i className="fa-solid fa-right-to-bracket mr-2"></i>
            Sign In
          </button>
        </div>
      </div>
      <CookieRecipe />
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default App;
