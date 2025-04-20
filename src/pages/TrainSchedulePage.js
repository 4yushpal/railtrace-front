import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

function TrainSchedulePage() {
  const { trainId } = useParams();
  const { state } = useLocation();
  const { source, destination } = state || {};
  const [train, setTrain] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrain = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/train/${trainId}`);
        if (!response.ok) throw new Error("Failed to fetch train");
        const data = await response.json();

        if (!data.route || !data.schedule) {
          throw new Error("Invalid train data");
        }

        if (source && destination) {
          const sourceIndex = data.route.indexOf(source);
          const destIndex = data.route.indexOf(destination);

          if (sourceIndex === -1 || destIndex === -1 || sourceIndex >= destIndex) {
            throw new Error("Invalid source or destination in route");
          }

          const filteredSchedule = data.schedule.slice(sourceIndex, destIndex + 1);
          setTrain({ ...data, schedule: filteredSchedule });
        } else {
          setTrain(data);
        }
        setError(null);
      } catch (err) {
        console.error("Error:", err.message);
        setError(err.message);
        setTrain(null);
      }
    };
    fetchTrain();
  }, [trainId, source, destination]);

  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (!train) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-200 md:flex md:items-center md:justify-center m-0">
      {/* Full-width on mobile, TrainStatus-like frame on desktop */}
      <div className="w-full min-h-screen bg-white md:max-w-[400px] md:shadow-2xl md:min-h-[100vh] md:h-auto md:overflow-y-auto">
        {/* Header */}
        <div className="bg-orange-500 p-4 flexitems-center justify-between">
          <div>
          {/* <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Mumbai Local Train</h1>
            <div className="w-6"></div>
          </div> */}
            <h1 className="text-xl font-bold items-center">
              {train.route[0]} - {train.route[train.route.length - 1]} ({train.trainId})
            </h1>
            
          </div>
          <div>
            <span className="text-sm">SCHEDULED</span>
            </div>
          {/* <span className="text-lg font-semibold">({train.trainId})</span> */}
        </div>
        

        {/* Station List */}
        <div className="p-4 bg-white">
          {train.schedule.map((stop, index) => (
            <div key={index} className="flex items-start relative">
              {/* Timeline */}
              <div className="flex flex-col items-center mr-4">
                <span className="text-sm text-gray-500">{stop.departure}</span>
                <div className="w-4 h-4 bg-green-500 rounded-full mt-1"></div>
                {index < train.schedule.length - 1 && (
                  <div className="w-1 h-16 bg-green-500 mt-1"></div>
                )}
              </div>

              {/* Station Info */}
              <div className="flex-1 py-2">
                <div className="flex items-center">
                  <span
                    className={`text-lg font-semibold ${
                      index === 0 ? "text-green-600" : "text-orange-500"
                    }`}
                  >
                    {stop.station}
                  </span>
                </div>
                {/* Platform field abhi nahi hai, agar add karna ho to baad mein */}
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="fixed bottom-4 right-4 flex flex-col space-y-4">
          <button className="bg-orange-500 font-bold p-4 rounded-full shadow-lg hover:bg-red-700">
            ↻
          </button>
        </div>
      </div>
    </div>
  );
}

export default TrainSchedulePage;