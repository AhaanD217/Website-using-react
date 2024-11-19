import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-purple-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-2">
          <img src="./Express.png" alt="DJS eXpress Logo" className="h-8 w-8" />
          <h1 className="text-2xl font-bold">DJS eXpress</h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-200">
              About
            </Link>
          </li>
          <li>
            <Link to="/jobs" className="hover:text-gray-200">
              Events
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-200">
              eXpresso
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
