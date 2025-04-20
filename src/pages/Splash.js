import React from 'react';
import Logo from './AppLogo.png';

function Splash() {
  return (
    <div className="min-h-screen bg-gray-200 md:flex md:items-center md:justify-center m-0">
      <div className="w-full min-h-screen bg-white md:max-w-[400px] md:shadow-2xl md:min-h-[100vh] md:h-auto md:overflow-y-auto flex items-center justify-center">
        <div className="relative w-full">
          {/* Image Container with Overlay */}
          <div className="relative flex items-center justify-center -translate-y-12 md:-translate-y-8">
            <img
              src={Logo}
              alt="RailTrace Logo"
              className="w-full ml-[-20px] h-auto object-cover"
            />

            {/* Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-3xl font-bold translate-y-24">
                <span className="text-orange-500">Rail</span>
                <span className="text-black">Trace</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Splash;