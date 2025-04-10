
import React, { useState } from 'react';
import { FileIcon, LockIcon } from 'lucide-react';
import { toast } from 'sonner';

const BotFollowersForm: React.FC = () => {
  const [playerFile, setPlayerFile] = useState<string>("");
  const [pin, setPin] = useState<string>("");

  const handleSubmit = () => {
    if (!playerFile.trim()) {
      toast.error("Please enter your player file");
      return;
    }
    
    toast.success("Bot following started!");
  };

  return (
    <div className="blox-card p-8 max-w-xl">
      <h2 className="text-2xl font-bold mb-4">Bot Followers</h2>
      
      <p className="text-gray-400 mb-6">
        Paste your player file in the box below, then click "Start Botting!" If 
        you don't know how to find a users "player file" then go ahead and
        watch "How to use"
      </p>
      
      <div className="relative mb-4">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          <FileIcon size={18} />
        </div>
        <input
          type="text"
          placeholder="Enter player file"
          value={playerFile}
          onChange={(e) => setPlayerFile(e.target.value)}
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
        Start Botting!
      </button>
    </div>
  );
};

export default BotFollowersForm;
