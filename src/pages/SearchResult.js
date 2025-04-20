// import React from 'react';
// import Layout from './Layout';

// const trainData = [
//   { time: '09:26 PM', station: 'CSMT', type: 'S', number: '98222', route: 'PANVEL - CSMT', platform: 'PF' },
//   { time: '09:30 PM', station: 'CSMT', type: 'S', number: '98224', route: 'PANVEL - CSMT', note: 'Not on Sunday', platform: 'PF' },
//   { time: '09:39 PM', station: 'CSMT', type: 'S', number: '98226', route: 'PANVEL - CSMT', platform: 'PF' },
//   { time: '09:52 PM', station: 'CSMT', type: 'S', number: '98228', route: 'PANVEL - CSMT', platform: 'PF' },
//   { time: '10:07 PM', station: 'CSMT', type: 'S', number: '98230', route: 'PANVEL - CSMT', note: 'Not on Sunday', platform: 'PF' },
//   { time: '10:15 PM', station: 'JUINAGAR', type: 'S', number: '99072', route: 'PANVEL - JUINAGAR', note: 'To Thane', platform: 'PF' },
//   { time: '10:19 PM', station: 'CSMT', type: 'S', number: '98232', route: 'PANVEL - CSMT', platform: 'PF' },
//   { time: '10:23 PM', station: 'CSMT', type: 'S', number: '98234', route: 'PANVEL - CSMT', platform: 'PF' },
//   { time: '10:35 PM', station: 'CSMT', type: 'S', number: '98236', route: 'PANVEL - CSMT', platform: 'PF' },
//   { time: '10:46 PM', station: 'CSMT', type: 'S', number: '98238', route: 'PANVEL - CSMT', platform: 'PF' },
//   { time: '10:50 PM', station: 'VASHI', type: 'S', number: '98240', route: 'PANVEL - VASHI', note: 'Not on Sunday', platform: 'PF' },
//   { time: '10:58 PM', station: 'CSMT', type: 'S', number: '98242', route: 'PANVEL - CSMT', platform: 'PF' },
//   { time: '11:13 PM', station: 'CSMT', type: 'S', number: '98244', route: 'PANVEL - CSMT', platform: 'PF' },
// ];

// function SearchResult() {
//   return (
//     <div className="min-h-screen bg-black text-white">
//       {/* Header */}
//       <div className="bg-red-600 p-4 flex items-center justify-between">
//         <div className="flex items-center">
//           <span className="text-2xl mr-2">Ⓗ</span>
//           <h1 className="text-xl font-bold">PANVEL</h1>
//         </div>
//         <div className="flex space-x-4">
//           <button className="text-xl">⧉</button>
//           <button className="text-xl">★</button>
//           <button className="text-xl">💬</button>
//           <button className="text-xl">☰</button>
//         </div>
//       </div>

//       {/* Train List */}
//       <div className="overflow-y-auto">
//         {trainData.map((train, index) => (
//           <div
//             key={index}
//             className={`flex items-center p-3 border-b border-gray-700 ${
//               index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800'
//             }`}
//           >
//             {/* Green Bar */}
//             <div className="w-2 h-12 bg-green-500 mr-3"></div>

//             {/* Train Info */}
//             <div className="flex-1">
//               <div className="flex items-center">
//                 <span className="text-lg font-semibold mr-2">{train.time}</span>
//                 <span className="text-sm bg-green-600 px-2 py-1 rounded">{train.station}</span>
//                 <span className="text-sm bg-gray-600 px-2 py-1 rounded ml-2">{train.type}</span>
//               </div>
//               <div className="text-sm">
//                 <span className="font-medium">{train.number}</span> : {train.route}
//                 {train.note && <span className="text-red-400 ml-2">{train.note}</span>}
//               </div>
//             </div>

//             {/* Platform */}
//             <div className="text-sm text-gray-400">{train.platform}</div>
//           </div>
//         ))}
//       </div>

//       {/* Refresh Button */}
//       <button className="fixed bottom-4 right-4 bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700">
//         ↻
//       </button>
//     </div>
//   );
// }

// export default SearchResult;


import React from 'react';

const trainData = [
  { time: '09:26 PM', station: 'CSMT', type: 'S', number: '98222', route: 'PANVEL - CSMT', platform: 'PF' },
  { time: '09:30 PM', station: 'CSMT', type: 'S', number: '98224', route: 'PANVEL - CSMT', note: 'Not on Sunday', platform: 'PF' },
  { time: '09:39 PM', station: 'CSMT', type: 'S', number: '98226', route: 'PANVEL - CSMT', platform: 'PF' },
  { time: '09:52 PM', station: 'CSMT', type: 'S', number: '98228', route: 'PANVEL - CSMT', platform: 'PF' },
  { time: '10:07 PM', station: 'CSMT', type: 'S', number: '98230', route: 'PANVEL - CSMT', note: 'Not on Sunday', platform: 'PF' },
  { time: '10:15 PM', station: 'JUINAGAR', type: 'S', number: '99072', route: 'PANVEL - JUINAGAR', note: 'To Thane', platform: 'PF' },
  { time: '10:19 PM', station: 'CSMT', type: 'S', number: '98232', route: 'PANVEL - CSMT', platform: 'PF' },
  { time: '10:23 PM', station: 'CSMT', type: 'S', number: '98234', route: 'PANVEL - CSMT', platform: 'PF' },
  { time: '10:35 PM', station: 'CSMT', type: 'S', number: '98236', route: 'PANVEL - CSMT', platform: 'PF' },
  { time: '10:46 PM', station: 'CSMT', type: 'S', number: '98238', route: 'PANVEL - CSMT', platform: 'PF' },
  { time: '10:50 PM', station: 'VASHI', type: 'S', number: '98240', route: 'PANVEL - VASHI', note: 'Not on Sunday', platform: 'PF' },
  { time: '10:58 PM', station: 'CSMT', type: 'S', number: '98242', route: 'PANVEL - CSMT', platform: 'PF' },
  { time: '11:13 PM', station: 'CSMT', type: 'S', number: '98244', route: 'PANVEL - CSMT', platform: 'PF' },
];

function SearchResult() {
  return (
    <div className="min-h-screen bg-gray-200 md:flex md:items-center md:justify-center m-0">
      {/* Full-width on mobile, TrainStatus-like frame on desktop */}
      <div className="w-full min-h-screen bg-white md:max-w-[400px] md:shadow-2xl md:min-h-[100vh] md:h-auto md:overflow-y-auto">
        {/* Header */}
        <div className="bg-orange-500 p-4 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl mr-2 text-white">Ⓗ</span>
            <h1 className="text-xl font-bold text-white">PANVEL</h1>
          </div>
          <div className="flex space-x-4">
            <button className="text-xl text-white">⧉</button>
            <button className="text-xl text-white">★</button>
            <button className="text-xl text-white">💬</button>
            <button className="text-xl text-white">☰</button>
          </div>
        </div>

        {/* Train List */}
        <div className="p-4">
          {trainData.map((train, index) => (
            <div
              key={index}
              className={`flex items-center p-3 border-b border-gray-200 ${
                index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'
              }`}
            >
              {/* Green Bar */}
              <div className="w-2 h-12 bg-green-500 mr-3"></div>

              {/* Train Info */}
              <div className="flex-1">
                <div className="flex items-center">
                  <span className="text-lg font-semibold text-gray-800 mr-2">{train.time}</span>
                  <span className="text-sm bg-green-600 text-white px-2 py-1 rounded">{train.station}</span>
                  <span className="text-sm bg-gray-600 text-white px-2 py-1 rounded ml-2">{train.type}</span>
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-medium">{train.number}</span> : {train.route}
                  {train.note && <span className="text-orange-500 ml-2">{train.note}</span>}
                </div>
              </div>

              {/* Platform */}
              <div className="text-sm text-gray-500">{train.platform}</div>
            </div>
          ))}
        </div>

        {/* Refresh Button */}
        <button className="fixed bottom-4 right-4 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-700">
          ↻
        </button>
      </div>
    </div>
  );
}

export default SearchResult;