import React from 'react';

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-200 md:flex md:items-center md:justify-center m-0">
      <div className="w-full min-h-screen bg-white md:max-w-[400px] md:shadow-2xl md:min-h-[100vh] md:h-auto md:overflow-y-auto">
        {children}
      </div>
    </div>
  );
}

export default Layout;