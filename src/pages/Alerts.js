import React from 'react';

const newsData = [
  {
    id: 1,
    image: 'https://via.placeholder.com/400x200', // Placeholder image; can be omitted
    title: 'Mumbai News: Commuters Endure Long Waits As BEST Bus Frequency Plummets Due To Traffic Congestion',
    credit: 'Free Press Journal',
    content:
      'In a concerning incident at Bhyandar Station, several passengers experienced a delay due to heavy traffic congestion affecting BEST bus services. The frequency of buses has significantly dropped, leaving commuters stranded for long periods. Authorities are working to address the issue, but no immediate solution has been provided.',
    date: '20-03-2025',
  },
  {
    id: 2,
    // No image provided for this news item
    title: 'Mumbai News: Train Delays on Central Line Due to Signal Failure',
    credit: 'Times of India',
    content:
      'A signal failure on the Central Line caused significant delays during peak hours today. Commuters reported waiting over 30 minutes at several stations. Railway authorities have promised to resolve the issue soon.',
    date: '21-03-2025',
  },
];

function Alerts() {
  const handleShare = (title, content) => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: content,
        url: window.location.href,
      }).catch((error) => console.log('Error sharing:', error));
    } else {
      alert('Share functionality is not supported on this device.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 md:flex md:items-center md:justify-center m-0">
      {/* Full-width on mobile, TrainStatus-like frame on desktop */}
      <div className="w-full min-h-screen bg-white md:max-w-[400px] md:shadow-2xl md:min-h-[100vh] md:h-auto md:overflow-y-auto">
        {/* Header */}
        <div className="bg-orange-500 p-4 flex items-center justify-between">
            <button className="text-2xl" onClick={() => window.history.back()}>
            ←
            </button>
            <h1 className="text-xl font-bold text-black">Mumbai Alerts</h1>
            <div className="w-6"></div>
        </div>

        {/* News List */}
        <div className="p-4">
          {newsData.map((news, index) => (
            <div key={news.id} className="mb-6">
              {/* News Card */}
              <div className="bg-gray-500 p-4 rounded-lg">
                <div className="flex justify-center mb-4">
                  <span className="text-orange-400 text-lg font-bold">Rail</span>
                  <span className="text-black text-lg font-bold">Trace</span>
                </div>
                {/* Conditionally render the image if it exists */}
                {news.image && (
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                )}
                <h2 className="text-yellow-400 text-lg font-semibold mb-2">{news.title}</h2>
                <p className="text-white text-sm">credit: - {news.credit}</p>
              </div>

              {/* News Details */}
              <div className="mt-2">
                <h3 className="text-black text-lg font-semibold">{news.title}</h3>
                <p className="text-gray-600 text-sm mt-1 line-clamp-3">{news.content}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-500 text-sm">{news.date}</span>
                  <button
                    onClick={() => handleShare(news.title, news.content)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ➔
                  </button>
                </div>
              </div>

              {/* Horizontal Line (except for the last post) */}
              {index < newsData.length - 1 && (
                <hr className="my-6 border border-gray-400" />
              )}
            </div>
          ))}
        </div>

        {/* Refresh Button */}
        <button className="fixed top-4 right-4 bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-600">
          ↻
        </button>
      </div>
    </div>
  );
}

export default Alerts;