import React from 'react';

function TrainStatus() {
  return (
    <div className="min-h-screen bg-gray-200 md:flex md:items-center md:justify-center m-0">
      <div className="w-full min-h-screen bg-white md:max-w-[400px] md:shadow-2xl md:overflow-y-auto md:min-h-[100vh] md:h-auto">
        <div className="p-4">
          {/* Header Section */}
          <div className="flex items-center justify-between">
            <button className="text-2xl">☰</button>
            <h1 className="text-xl font-bold">Train Status</h1>
            <div className="w-6"></div> {/* Placeholder for alignment */}
          </div>

          {/* Train Number and Status Inputs */}
          <div className="mt-6">
            <div className="mb-4">
              <input
                type="text"
                placeholder="TRAIN NUMBER"
                className="w-full p-3 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800">
              CHECK STATUS
            </button>
          </div>

          {/* Status Details */}
          <div className="mt-6">
            <div className="p-3 bg-orange-100 rounded-md mb-2">
              <p className="font-semibold">Train: 12345 - Express</p>
              <p>Status: On Time</p>
              <p>Arrival: 14:30 PM</p>
            </div>
            <div className="p-3 bg-orange-100 rounded-md">
              <p className="font-semibold">Train: 67890 - Superfast</p>
              <p>Status: Delayed by 30 mins</p>
              <p>Arrival: 16:00 PM</p>
            </div>
          </div>

          {/* Train Chat Button (Floating on Bottom Right) */}
          <div className="mt-6 flex justify-end">
            <button className="bg-orange-500 text-white py-2 px-4 rounded-full flex items-center hover:bg-orange-600">
              Train Chat <span className="ml-2">💬</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainStatus;