
import React, { useState } from 'react';
import BackButton from '@/components/BackButton';
import { FileIcon, LockIcon } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

const CopyGames = () => {
  const [gameFile, setGameFile] = useState<string>("");
  const [pin, setPin] = useState<string>("");

  const handleSubmit = () => {
    if (!gameFile.trim()) {
      toast.error("Please enter a game file");
      return;
    }
    
    toast.success("Game copy process started!");
  };

  return (
    <div className="min-h-screen bg-blox-gradient">
      <div className="container mx-auto px-4 py-8">
        <BackButton />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-2 text-center">Copy Games</h1>
          <p className="text-center text-gray-400 mb-12">
            Copy any Roblox game efficiently with our advanced tool
          </p>
          
          <motion.div 
            className="max-w-xl mx-auto blox-card p-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4">Game Copier</h2>
            
            <p className="text-gray-400 mb-6">
              Enter the game file you want to copy below and create a PIN for security. Our system will process your request quickly.
            </p>
            
            <motion.div 
              className="relative mb-4"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <FileIcon size={18} />
              </div>
              <input
                type="text"
                placeholder="Enter Game File"
                value={gameFile}
                onChange={(e) => setGameFile(e.target.value)}
                className="w-full bg-black/30 border border-white/10 rounded-md p-3 pl-12 text-white focus:outline-none focus:border-blox-teal transition-all"
              />
            </motion.div>
            
            <motion.div 
              className="relative mb-6"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
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
              transition={{ delay: 0.5 }}
            >
              Copy Game
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CopyGames;
