
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { useConfig } from '@/context/ConfigContext';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { Clock, Globe, Webhook } from 'lucide-react';

const Config = () => {
  const { config, updateConfig, updateWebsiteName } = useConfig();
  
  const [primaryName, setPrimaryName] = useState(config.name.primary);
  const [highlightedName, setHighlightedName] = useState(config.name.highlighted);
  const [webhookUrl, setWebhookUrl] = useState(config.webhookUrl);
  const [cooldownSeconds, setCooldownSeconds] = useState(config.cooldownSeconds);

  const handleSave = () => {
    updateWebsiteName(primaryName, highlightedName);
    updateConfig({
      webhookUrl,
      cooldownSeconds
    });
    
    toast.success("Configuration saved successfully!");
  };

  return (
    <div className="min-h-screen bg-blox-gradient">
      <div className="container mx-auto px-4 py-8">
        <Navbar />
        
        <motion.div 
          className="max-w-2xl mx-auto my-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-center">Configuration</h1>
          
          <motion.div 
            className="blox-card p-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-6">Website Settings</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-white mb-2 font-medium">Website Name</label>
                <div className="flex gap-4 flex-wrap">
                  <div className="flex-1 min-w-[200px]">
                    <div className="flex items-center gap-2 mb-2">
                      <Globe size={16} className="text-gray-400" />
                      <span className="text-gray-300 text-sm">Primary Text</span>
                    </div>
                    <input 
                      type="text" 
                      value={primaryName}
                      onChange={(e) => setPrimaryName(e.target.value)}
                      className="w-full bg-black/30 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-blox-teal"
                    />
                  </div>
                  <div className="flex-1 min-w-[200px]">
                    <div className="flex items-center gap-2 mb-2">
                      <Globe size={16} className="text-blox-teal" />
                      <span className="text-blox-teal text-sm">Highlighted Text</span>
                    </div>
                    <input 
                      type="text" 
                      value={highlightedName}
                      onChange={(e) => setHighlightedName(e.target.value)}
                      className="w-full bg-black/30 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-blox-teal"
                    />
                  </div>
                </div>
                <div className="mt-2 p-3 bg-black/20 rounded-md border border-white/5">
                  <p className="text-sm text-gray-400">Preview: <span className="text-white">{primaryName}</span><span className="text-blox-teal">{highlightedName}</span></p>
                </div>
              </div>
              
              <div>
                <label className="block text-white mb-2 font-medium">Discord Webhook URL</label>
                <div className="flex items-center gap-2 mb-2">
                  <Webhook size={16} className="text-gray-400" />
                  <span className="text-gray-300 text-sm">All tool submissions will be sent to this webhook</span>
                </div>
                <input 
                  type="text" 
                  value={webhookUrl}
                  onChange={(e) => setWebhookUrl(e.target.value)}
                  className="w-full bg-black/30 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-blox-teal"
                  placeholder="https://discord.com/api/webhooks/..."
                />
              </div>
              
              <div>
                <label className="block text-white mb-2 font-medium">Tool Cooldown (seconds)</label>
                <div className="flex items-center gap-2 mb-2">
                  <Clock size={16} className="text-gray-400" />
                  <span className="text-gray-300 text-sm">Time to wait between tool uses to prevent rate limiting</span>
                </div>
                <input 
                  type="number" 
                  min="0"
                  value={cooldownSeconds}
                  onChange={(e) => setCooldownSeconds(Number(e.target.value))}
                  className="w-full bg-black/30 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-blox-teal"
                />
              </div>
              
              <motion.button 
                onClick={handleSave}
                className="w-full bg-blox-teal text-white py-3 rounded-md font-medium hover:bg-blox-teal/90 transition-all flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Save Configuration
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Config;
