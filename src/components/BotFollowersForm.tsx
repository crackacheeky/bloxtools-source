
import React, { useState } from 'react';
import { FileIcon, LockIcon } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

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
    <motion.div 
      className="blox-card p-8 max-w-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 
        className="text-2xl font-bold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Bot Followers
      </motion.h2>
      
      <motion.p 
        className="text-gray-400 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Paste your player file in the box below, then click "Start Botting!" If 
        you don't know how to find a users "player file" then go ahead and
        watch "How to use"
      </motion.p>
      
      <motion.div 
        className="relative mb-4"
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          <FileIcon size={18} />
        </div>
        <input
          type="text"
          placeholder="Enter player file"
          value={playerFile}
          onChange={(e) => setPlayerFile(e.target.value)}
          className="w-full bg-black/30 border border-white/10 rounded-md p-3 pl-12 text-white focus:outline-none focus:border-blox-teal transition-all"
        />
      </motion.div>
      
      <motion.div 
        className="relative mb-6"
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          <LockIcon size={18} />
        </div>
        <input
          type="password"
          placeholder="Create A Pin"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          className="w-full bg-black/30 border border-white/10 rounded-md p-3 pl-12 text-white focus:outline-none focus:border-blox-teal transition-all"
        />
      </motion.div>
      
      <motion.button 
        onClick={handleSubmit}
        className="w-full bg-blox-teal text-white py-3 rounded-md font-medium hover:brightness-110 transition-all"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Start Botting!
      </motion.button>
    </motion.div>
  );
};

export default BotFollowersForm;
