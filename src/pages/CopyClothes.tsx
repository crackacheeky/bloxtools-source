
import React, { useState } from 'react';
import BackButton from '@/components/BackButton';
import { FileIcon, LockIcon } from 'lucide-react';
import { toast } from 'sonner';

const CopyClothes = () => {
  const [clothingId, setClothingId] = useState<string>("");
  const [pin, setPin] = useState<string>("");

  const handleSubmit = () => {
    if (!clothingId.trim()) {
      toast.error("Please enter a clothing ID");
      return;
    }
    
    toast.success("Clothing copy process started!");
  };

  return (
    <div className="min-h-screen bg-blox-gradient">
      <div className="container mx-auto px-4 py-8">
        <BackButton />
        
        <h1 className="text-4xl font-bold mb-2 text-center">Copy Clothes</h1>
        <p className="text-center text-gray-400 mb-12">
          Copy any Roblox clothing item quickly and easily
        </p>
        
        <div className="max-w-xl mx-auto blox-card p-8">
          <h2 className="text-2xl font-bold mb-4">Clothing Copier</h2>
          
          <p className="text-gray-400 mb-6">
            Enter the clothing item ID you want to copy below and create a PIN for security.
          </p>
          
          <div className="relative mb-4">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <FileIcon size={18} />
            </div>
            <input
              type="text"
              placeholder="Enter Clothing ID"
              value={clothingId}
              onChange={(e) => setClothingId(e.target.value)}
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
            Copy Clothing
          </button>
        </div>
      </div>
    </div>
  );
};

export default CopyClothes;
