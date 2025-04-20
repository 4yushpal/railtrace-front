import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

function RailTrace() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Load initial state only when coming back from navigation
  useEffect(() => {
    const { source: prevSource, destination: prevDestination } = location.state || {};
    const storedSearches = JSON.parse(localStorage.getItem("recentSearches")) || [];

    // If coming back with state (e.g., from TrainListPage), restore values
    if (prevSource && prevDestination) {
      setSource(prevSource);
      setDestination(prevDestination);
      setRecentSearches(storedSearches);
    } else if (location.pathname === "/" && storedSearches.length > 0) {
      // If revisiting home after searches exist, load latest search into fields
      setSource(storedSearches[0].source);
      setDestination(storedSearches[0].destination);
      setRecentSearches(storedSearches);
    } else {
      // First-time visit: keep fields empty, load recent searches but don't fill inputs
      setSource("");
      setDestination("");
    }
  }, [location]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/trains?source=${source}&destination=${destination}`
      );
      if (!response.ok) throw new Error("Failed to fetch trains");
      const trains = await response.json();
      console.log("Fetched Trains:", trains);

      // Update recent searches
      const newSearch = { source, destination };
      const updatedSearches = [
        newSearch,
        ...recentSearches.filter(s => s.source !== source || s.destination !== destination),
      ].slice(0, 2);
      setRecentSearches(updatedSearches);
      localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));

      navigate("/trains", { state: { trains, source, destination } });
    } catch (err) {
      console.error("Error:", err);
      alert("Error fetching trains!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center">
      <div className="w-full min-h-screen bg-white md:max-w-[400px] md:shadow-2xl md:min-h-[100vh] md:h-auto md:overflow-y-auto relative">
        {/* Header Section */}
        <div className="bg-orange-500 p-4 flex items-center justify-between">
            <button className="text-2xl" onClick={toggleSidebar}>
              ☰
            </button>
            <h1 className="text-xl font-bold">Mumbai Local Train</h1>
            <div className="w-6"></div>
          </div>
        <div className="p-4">
          {/* Header Section
          <div className="flex items-center justify-between">
            <button className="text-2xl" onClick={toggleSidebar}>
              ☰
            </button>
            <h1 className="text-xl font-bold">Mumbai Local Train</h1>
            <div className="w-6"></div>
          </div> */}

          {/* Sidebar with Overlay */}
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={toggleSidebar}
            ></div>
          )}

          {/* Search Inputs */}
          <div className="mt-6">
            <input
              type="text"
              placeholder="SOURCE"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              className="w-full p-3 mb-4 bg-gray-100 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="text"
              placeholder="DESTINATION"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full p-3 mb-4 bg-gray-100 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              onClick={handleSearch}
              className="w-full bg-black text-white py-3 hover:bg-gray-800 transition"
            >
              SEARCH
            </button>
          </div>

          {/* History Section */}
          <div className="mt-6">
            <div className="flex items-center p-3 bg-orange-100 mb-2 rounded-md shadow-sm">
              <span className="mr-2">⟳</span>
              <span>
                {recentSearches[0]
                  ? `${recentSearches[0].source} - ${recentSearches[0].destination}${
                      recentSearches[0].departure ? ` (${recentSearches[0].departure})` : ""
                    }`
                  : "Recent Search"}
              </span>
            </div>
            <div className="flex items-center p-3 bg-orange-100 rounded-md shadow-sm">
              <span className="mr-2">⟳</span>
              <span>
                {recentSearches[1]
                  ? `${recentSearches[1].source} - ${recentSearches[1].destination}${
                      recentSearches[1].departure ? ` (${recentSearches[1].departure})` : ""
                    }`
                  : "Recent Search"}
              </span>
            </div>
          </div>

          {/* Train Chat Button */}
          <div className="mt-6 flex justify-end">
            <Link to="/Trainchat">
              <button className="bg-orange-500 font-bold py-2 px-4 flex items-center hover:bg-orange-600 transition rounded-md">
                Train Chat <span className="ml-2">💬</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RailTrace;