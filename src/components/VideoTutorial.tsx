
import React from 'react';
import { Play, Volume2, Maximize2 } from 'lucide-react';

const VideoTutorial: React.FC = () => {
  return (
    <div className="blox-card p-8 max-w-xl">
      <h2 className="text-2xl font-bold mb-2">How to use</h2>
      <p className="text-gray-400 mb-4">Video Tutorial</p>
      
      <div className="relative rounded-md overflow-hidden">
        <img 
          src="/lovable-uploads/a7e53f1d-6d18-444c-8be2-286d06633b55.png" 
          alt="Video Tutorial" 
          className="w-full"
        />
        
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="text-white">
              <Play size={20} />
            </button>
            <span className="text-white text-sm">0:00 / 1:35</span>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="text-white">
              <Volume2 size={20} />
            </button>
            <button className="text-white">
              <Maximize2 size={20} />
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-[40px] left-0 right-0 px-3">
          <div className="h-1 bg-gray-600 rounded-full">
            <div className="h-full w-1/4 bg-blox-teal rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTutorial;
