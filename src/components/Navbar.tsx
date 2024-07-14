import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  //   const [searchValue, setSearchValue] = useState<string>("");
  const [showCategories, setShowCategories] = useState<boolean>(false);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  const closeCategories = () => {
    setShowCategories(false);
  };

  return (
    <nav className="flex bg-gray-500 p-4 w-full gap-6 relative">
      <div className="pl-8">
        <Link to="/">
          <p>Logo</p>
        </Link>
      </div>
      <div className="relative">
        <button onMouseEnter={toggleCategories}>Categories</button>
        {showCategories && ( // Conditional rendering
          <ul
            className="absolute top-8 w-24 bg-white p-2 rounded-lg shadow-md z-10 transition-all"
            onMouseLeave={closeCategories} // Cierra el menú cuando el cursor sale del menú
          >
            <li className="hover:bg-gray-300 p-1 transition-all rounded-md">
              Option 1
            </li>
            <li className="hover:bg-gray-300 p-1 transition-all rounded-md">
              Option 2
            </li>
            <li className="hover:bg-gray-300 p-1 transition-all rounded-md">
              Option 3
            </li>
          </ul>
        )}
      </div>
      <div className="flex w-full justify-end">
        <ul className="flex gap-6 font-semibold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link className="hover:underline" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
