import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <>
        <div className="flex justify-around bg-sky-700 p-8 text-white">
          <Link to="/">Home</Link>
          <Link to="/one">One</Link>
          <Link to="/two">Two</Link>
        </div>
        <Routes>
          <Route path="/" element={<div>Home Page</div>}></Route>
          <Route path="/one" element={<PageOne />}></Route>
          <Route path="/two" element={<PageTwo />}></Route>
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;
