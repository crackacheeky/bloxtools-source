
import React, { useState } from 'react';
import BackButton from '@/components/BackButton';
import { FileIcon, LockIcon } from 'lucide-react';
import { toast } from 'sonner';

const CopyGames = () => {
  const [gameId, setGameId] = useState<string>("");
  const [pin, setPin] = useState<string>("");

  const handleSubmit = () => {
    if (!gameId.trim()) {
      toast.error("Please enter a game ID");
      return;
    }
    
    toast.success("Game copy process started!");
  };

  return (
    <div className="min-h-screen bg-blox-gradient">
      <div className="container mx-auto px-4 py-8">
        <BackButton />
        
        <h1 className="text-4xl font-bold mb-2 text-center">Copy Games</h1>
        <p className="text-center text-gray-400 mb-12">
          Copy any Roblox game efficiently with our advanced tool
        </p>
        
        <div className="max-w-xl mx-auto blox-card p-8">
          <h2 className="text-2xl font-bold mb-4">Game Copier</h2>
          
          <p className="text-gray-400 mb-6">
            Enter the game ID you want to copy below and create a PIN for security. Our system will process your request quickly.
          </p>
          
          <div className="relative mb-4">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <FileIcon size={18} />
            </div>
            <input
              type="text"
              placeholder="Enter Game ID"
              value={gameId}
              onChange={(e) => setGameId(e.target.value)}
              className="w-full bg-black/30 border border-white/10 rounded-md p-3 pl-12 text-white focus:outline-none focus:border-blox-teal"
            />
          </div>
          
          <div className="relative mb-6">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <LockIcon size={18} />
            </div>
            <input
              type="password"
              placeholder="Create A Pin"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="w-full bg-black/30 border border-white/10 rounded-md p-3 pl-12 text-white focus:outline-none focus:border-blox-teal"
            />
          </div>
          
          <button 
            onClick={handleSubmit}
            className="w-full bg-blox-teal text-white py-3 rounded-md font-medium hover:brightness-110 transition-all"
          >
            Copy Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default CopyGames;
