import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-t from-blue-300 to-blue-500 text-white py-4 z-10">
      <div className="container mx-auto flex justify-end items-center px-20">
        <nav className="space-x-4">
          <Link to="/profile">
            <img
              src={logo}
              className="h-10 w-10 rounded-full"
              alt="profile pic"
            />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
