import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import axios from "axios";
import Logo from "../pages/AppLogo.png"; // Ensure correct path
import { UserContext } from "../App"; // Import UserContext


function Sidebar({ isOpen, toggleSidebar }) {
  const { user, setUser } = useContext(UserContext); // Use global user state

  // Load user from localStorage on mount (optional, App.js already handles this)
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && !user) setUser(storedUser);
  }, [setUser]);

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const { data } = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        });
        setUser(data); // Update global user state
        localStorage.setItem("user", JSON.stringify(data));
      } catch (error) {
        console.error("Login Error:", error);
      }
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  const handleLogout = () => {
    googleLogout();
    setUser(null); // Update global user state
    localStorage.removeItem("user");
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:w-80`}
    >
      <div className="p-4 border-b items-center justify-between">
        <button className="text-2xl" onClick={toggleSidebar}>
          ✕
        </button>
        <div className="flex items-center">
          <img src={Logo} alt="RailTrace Logo" className="w-24 h-auto" />
          <h2 className="text-lg font-semibold ml-2">
            <span className="text-black">By</span> <span className="text-orange-500">RailTrace</span>
          </h2>
        </div>
      </div>

      <div className="p-4">
        {user ? (
          <div className="mb-4">
            <div className="text-lg font-semibold text-orange-500">Hi, {user.name.split(" ")[0]}!</div>
            <button
              onClick={handleLogout}
              className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 mt-2"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={login}
            className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 mb-4"
          >
            Login
          </button>
        )}

        <ul className="space-y-3 md:text-left">
          <li>
            <Link to="/Map" className="block text-lg text-gray-700 hover:text-orange-500 p-2">
              Map
            </Link>
          </li>
          <li>
            <Link to="/Alerts" className="block text-lg text-gray-700 hover:text-orange-500 p-2">
              Alerts
            </Link>
          </li>
          <li>
            <Link to="/lines" className="block text-lg text-gray-700 hover:text-orange-500 p-2">
              Lines
            </Link>
          </li>
          <li>
            <Link to="/report-issues" className="block text-lg text-gray-700 hover:text-orange-500 p-2">
              Report Issues
            </Link>
          </li>
          <li>
            <Link to="/suggestion" className="block text-lg text-gray-700 hover:text-orange-500 p-2">
              Suggest a Feature!
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;