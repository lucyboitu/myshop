import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faUser, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section: Logo & Navigation */}
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-2xl font-bold text-white">
            MyShop
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="hover:text-yellow-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-yellow-400 transition"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-yellow-400 transition">
                  Cart
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Right Section: Social Icons & Login */}
        <div className="flex items-center space-x-4">
          <div className="flex space-x-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FontAwesomeIcon icon={faFacebook} className="text-xl" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FontAwesomeIcon icon={faTwitter} className="text-xl" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-xl" />
            </a>
          </div>
          <Link
            to="/signin"
            className="flex items-center space-x-1 hover:text-yellow-400 transition"
          >
            <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
            <span>Register</span>
          </Link>
          <Link
            to="/signin"
            className="flex items-center space-x-1 hover:text-yellow-400 transition"
          >
            <FontAwesomeIcon icon={faSignInAlt} />
            <span>Register</span>
          </Link>
          <Link
            to="/signin"
            className="flex items-center space-x-1 hover:text-yellow-400 transition"
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
