import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  const { auth } = useAuth();
  const [isAdmin, setIsAdmin] = useState(auth?.role == "admin");
  console.log(isAdmin);

  useEffect(() => {
    setIsAdmin(auth.role == "admin");
  }, [auth]);
  return (
    <div className="bg-gray-800 text-white min-w-48 flex flex-col px-6">
      <div className="h-20 w-20 my-6">
        <img src={logo} alt="logo" className="rounded-full" />
      </div>
      <nav className="flex-1">
        <ul className="space-y-2">
          <li className="p-2 hover:bg-gray-700">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 hover:bg-gray-700">
            <Link to="/about">About</Link>
          </li>
          <li className="p-2 hover:bg-gray-700">
            <Link to="/contact">Contact</Link>
          </li>
          {isAdmin && (
            <>
              <li className="p-2 hover:bg-gray-700">
                <Link to="/admin/dashboard">Dashboard</Link>
              </li>
              <li className="p-2 hover:bg-gray-700">
                <Link to="/admin/users">Users</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
