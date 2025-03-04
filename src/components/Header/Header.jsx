import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSignInAlt,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-2xl font-bold text-white">
            MyShop
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="hover:text-red-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" vclassName="hover:text-red-400 transition">
                  Products
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/cart" className="">
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
          <Link
            to="/signup"
            className="flex items-center space-x-1 hover:text-red-400 transition"
          >
            <FontAwesomeIcon icon={faSignInAlt} />
            <span>Sign up</span>
          </Link>
          <Link
            to="/signin"
            className="flex items-center space-x-1 hover:text-red-400 transition"
          >
            <FontAwesomeIcon icon={faUser} />
            <span>Login</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
