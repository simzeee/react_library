import { useState } from "react";
import CatCard from "./CatCard.jsx";
import NavCard from "./NavButton.jsx";
import CATS from "./cats";

const App = () => {
  const [catIdx, setCatIdx] = useState([3]);
  
  return (
    <div className="flex justify-center items-center">
      <NavCard
        onClick={() => {
          setCatIdx(catIdx - 1);
        }}
        show={catIdx > 0}
        icon="fa-circle-chevron-left"
      />

      <CatCard cat={CATS[catIdx]}></CatCard>
      <NavCard
        onClick={() => {
          setCatIdx(catIdx + 1);
        }}
        icon="fa-circle-chevron-right"
        show={catIdx < CATS.length -1 }
      />
    </div>
  );
};

export default App;
