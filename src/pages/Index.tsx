
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
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="mb-2"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
          >
            <motion.div
              animate={{ 
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Star className="text-yellow-400 h-10 w-10" fill="currentColor" />
            </motion.div>
          </motion.div>
          
          <motion.h1 
            className="text-6xl font-bold mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              className="text-white"
              animate={{ 
                textShadow: ["0 0 5px rgba(255,255,255,0)", "0 0 15px rgba(255,255,255,0.5)", "0 0 5px rgba(255,255,255,0)"]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Blox
            </motion.span>
            <motion.span 
              className="text-blox-teal"
              animate={{ 
                textShadow: ["0 0 5px rgba(0,215,220,0)", "0 0 15px rgba(0,215,220,0.5)", "0 0 5px rgba(0,215,220,0)"]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            >
              Tools
            </motion.span>
          </motion.h1>
          
          <motion.div
            className="text-gray-300 text-lg mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
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
            <motion.p 
              className="mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              [ If your account is younger than 100days it will not work its to prevent from flooding our tools ]
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
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
