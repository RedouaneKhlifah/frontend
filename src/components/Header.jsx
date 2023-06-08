import React from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="relative bg-white">
      <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
        <div>
          <a href="#" className="flex">
            <span className="sr-only">Workflow</span>
            <img
              className="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt=""
            />
          </a>
        </div>
        <div className="hidden md:flex-1 md:flex md:items-center md:justify-end">
          <div className="flex items-center md:ml-12">
            <a className="text-base font-medium text-gray-500 hover:text-gray-900">
              <Link to={"/register"}>Sign up</Link>
            </a>

            <a className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
              <Link to={"/login"}>Sign in</Link>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
