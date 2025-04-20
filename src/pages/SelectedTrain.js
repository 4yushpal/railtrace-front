import React from 'react';

const stationData = [
  { time: '09:52', station: 'PANVEL', platform: '', isStart: true },
  { time: '09:57', station: 'KHANDESHWAR', platform: 'PF 2 RIGHT' },
  { time: '10:00', station: 'MANASAROVAR', platform: 'PF 4 BOTH' },
  { time: '10:03', station: 'KHARGHAR', platform: 'PF 2 BOTH' },
  { time: '10:07', station: 'BELAPUR CBD', platform: 'PF 3 BOTH' },
  { time: '10:11', station: 'SEAWOOD DARAVE', platform: 'PF 2 BOTH' },
  { time: '10:14', station: 'NERUL', platform: 'PF 4 BOTH' },
  { time: '10:17', station: 'JUINAGAR', platform: 'PF 4 BOTH' },
  { time: '10:20', station: 'SANPADA', platform: 'PF 4 BOTH' },
  { time: '10:22', station: 'VASHI', platform: 'PF 4 BOTH' },
  { time: '10:31', station: 'MANKHURD', platform: 'PF 2 LEFT' },
  { time: '10:34', station: 'GOVANDI', platform: '' },
];

function SelectedTrain() {
  return (
    <div className="min-h-screen bg-gray-200 md:flex md:items-center md:justify-center m-0">
      {/* Full-width on mobile, TrainStatus-like frame on desktop */}
      <div className="w-full min-h-screen bg-white md:max-w-[400px] md:shadow-2xl md:min-h-[100vh] md:h-auto md:overflow-y-auto">
        {/* Header */}
        <div className="bg-orange-500 p-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-black">PANVEL - CSMT</h1>
            <span className="text-sm text-black">SCHEDULED</span>
          </div>
          <span className="text-lg font-semibold text-black">98228</span>
        </div>

        {/* Station List */}
        <div className="p-4 bg-white">
          {stationData.map((station, index) => (
            <div key={index} className="flex items-start relative">
              {/* Timeline */}
              <div className="flex flex-col items-center mr-4">
                <span className="text-sm text-gray-500">{station.time}</span>
                <div className="w-4 h-4 bg-green-500 rounded-full mt-1"></div>
                {index < stationData.length - 1 && (
                  <div className="w-1 h-16 bg-green-500 mt-1"></div>
                )}
              </div>

              {/* Station Info */}
              <div className="flex-1 py-2">
                <div className="flex items-center">
                  <span
                    className={`text-lg font-semibold ${
                      station.isStart ? 'text-green-600' : 'text-orange-500'
                    }`}
                  >
                    {station.station}
                  </span>
                </div>
                {station.platform && (
                  <div className="text-sm text-gray-400">{station.platform}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="fixed bottom-4 right-4 flex flex-col space-y-4">
          <button className="bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700">
            ⋮
          </button>
          <button className="bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700">
            👥
          </button>
          <button className="bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700">
            ↻
          </button>
        </div>
      </div>
    </div>
  );
}

export default SelectedTrain;