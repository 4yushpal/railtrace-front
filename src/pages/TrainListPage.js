import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function TrainListPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const trains = state?.trains || [];
  const { source, destination } = state || {};

  const handleTrainSelect = (train) => {
    // Update recent searches with departure time
    const recentSearches = JSON.parse(localStorage.getItem("recentSearches")) || [];
    const newSearch = { source, destination, departure: train.schedule[0]?.departure || "N/A" };
    const updatedSearches = [
      newSearch,
      ...recentSearches.filter(s => s.source !== source || s.destination !== destination),
    ].slice(0, 2);
    localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));

    navigate(`/train/${train.trainId}`, { state: { source, destination } });
  };

  return (
    <div className="min-h-screen bg-gray-200 md:flex md:items-center md:justify-center m-0">
      <div className="w-full min-h-screen bg-white md:max-w-[400px] md:shadow-2xl md:min-h-[100vh] md:h-auto md:overflow-y-auto">
        <div className="bg-orange-500 p-4 flex items-center justify-between">
          {/* <div className="flex items-center"> */}
            <span className="text-2xl mr-2 font-bold">Ⓗ</span>
            <h1 className="text-xl font-bold">{source ? source.toUpperCase() : "TRAIN LIST"}</h1>
          {/* </div> */}
          <div className="flex space-x-4">
            <button className="text-2xl font-bold">★</button>
          </div>
        </div>
        <div className="p-4">
          {trains.length === 0 ? (
            <p className="text-orange-500 text-center">No local trains found!</p>
          ) : (
            trains.map((train) => (
              <div
                key={train.trainId}
                onClick={() => handleTrainSelect(train)}
                className={`flex items-center p-3 border-b border-gray-200 ${
                  train.trainId % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                } cursor-pointer hover:bg-gray-200`}
              >
                <div className="w-2 h-12 bg-green-500 mr-3"></div>
                <div className="flex-1">
                  <div className="flex items-center">
                    <span className="text-lg font-semibold text-gray-800 mr-2">
                      {train.schedule[0]?.departure || "N/A"}
                    </span>
                    <span className="text-sm bg-green-600 text-white px-2 py-1 rounded">
                      {train.route[train.route.length - 1]}
                    </span>
                    <span className="text-sm bg-gray-600 text-white px-2 py-1 rounded ml-2">S</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">{train.trainId}</span> {train.route[0]} -{" "}
                    {train.route[train.route.length - 1]}
                  </div>
                </div>
                <div className="text-sm text-gray-500">PF</div>
              </div>
            ))
          )}
        </div>
        <button className="fixed bottom-4 right-4 bg-orange-500 font-bold p-4 rounded-full shadow-lg hover:bg-orange-700">
          ↻
        </button>
      </div>
    </div>
  );
}

export default TrainListPage;