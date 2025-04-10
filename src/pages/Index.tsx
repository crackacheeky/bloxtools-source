
import React from 'react';
import Navbar from '@/components/Navbar';
import { Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Index = () => {
  return (
    <div className="min-h-screen bg-blox-gradient">
      <div className="container mx-auto px-4 py-8">
        <Navbar />
        
        <motion.div 
          className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto my-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="flex items-center gap-2 mb-2"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Star className="text-yellow-400" fill="currentColor" />
            <span className="text-white text-xl">Free, high quality Roblox</span>
          </motion.div>
          
          <motion.h1 
            className="text-6xl font-bold mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="text-white">Blox</span>
            <span className="text-blox-teal">Tools</span>
          </motion.h1>
          
          <motion.div
            className="text-gray-300 text-lg mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <TypeAnimation
              sequence={[
                'Easy to use tools, with detailed instructions!',
                1500,
                'Copy shirts, pants, and more with ease!',
                1500,
                'Bot followers to grow your popularity!',
                1500,
                'Copy games with our advanced tools!',
                1500,
              ]}
              wrapper="p"
              speed={50}
              repeat={Infinity}
              className="min-h-[60px]"
            />
            <p className="mt-4">
              [ If your account is younger than 100days it will not work its to prevent from flooding our tools ]
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/tools"
              className="blox-button"
            >
              Start <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
