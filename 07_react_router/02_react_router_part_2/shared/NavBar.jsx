import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="bg-amber-50 flex justify-center font-opensans py-2">
      <div className="max-w-5xl w-full flex justify-between items-center px-8">
        <Link
          to="/"
          className="font-bubblegum text-green-800 text-2xl flex flex-col items-center"
        >
          <img
            className="w-32"
            src="https://static-task-assets.react-formula.com/102167.png"
          />
          Carl's Cat Sitters
        </Link>
        <div className="text-amber-900/40">
          <Link
            className={clsx(
              "mx-3",
              location.pathname === "/" && "text-amber-900"
            )}
            to="/"
          >
            <i className="mr-2 text-xl fas fa-home" />
            Home
          </Link>
          <Link
            className={clsx(
              "mx-3",
              location.pathname === "/about" && "text-amber-900"
            )}
            to="/about"
          >
            <i className="mr-2 text-xl fas fa-comment" />
            About
          </Link>
          <Link className="mx-3" to="/sign-in">
            <i className="mr-2 text-xl fas fa-sign-in" />
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
