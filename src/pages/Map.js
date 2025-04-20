import React from 'react';
import Layout from './Layout'; // Layout component jo humne banaya
import MapImage from './RailMap.png'; // Apna static map image yahan import kar

function Map() {
  return (
    <Layout>
      <div className="bg-orange-500 p-4 flex items-center justify-between">
          <button className="text-2xl" onClick={() => window.history.back()}>
            ←
          </button>
          <h1 className="text-xl font-bold text-black">Railmap</h1>
          <div className="w-6"></div>
      </div>
      <div className="p-2">
        {/* Header Section */}
        {/* <div className="bg-orange-500 flex items-center justify-between">
          <button className="text-2xl" onClick={() => window.history.back()}>
            ←
          </button>
          <h1 className="text-xl font-bold">Railmap</h1>
          <div className="w-6"></div> {/* Placeholder for alignment */}
        

        {/* Static Map Image */}
        <div className="mt-0">
          <img
            src={MapImage}
            alt="Railway Map"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </Layout>
  );
}

export default Map;