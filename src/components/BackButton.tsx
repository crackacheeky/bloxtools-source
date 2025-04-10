
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const BackButton: React.FC = () => {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        whileHover={{ x: -5, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link to="/" className="flex items-center gap-2 text-white bg-black/40 backdrop-blur-md border border-white/5 rounded-full px-6 py-3 mb-12 w-fit hover:bg-black/60 transition-all group">
          <Logo />
          <span className="text-white group-hover:text-blox-teal transition-colors">GO BACK</span>
          <motion.div
            animate={{ x: [-5, 0, -5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowLeft size={16} className="group-hover:text-blox-teal transition-colors" />
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

const Logo: React.FC = () => {
  return (
    <motion.div 
      className="w-8 h-8 bg-white flex items-center justify-center rounded-md relative overflow-hidden"
      whileHover={{ rotate: 15 }}
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-transparent to-blox-teal/20"
        animate={{ 
          opacity: [0.1, 0.5, 0.1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="w-1.5 h-1.5 bg-black relative z-10"
        animate={{ 
          scale: [1, 1.8, 1],
          backgroundColor: ['#000', '#00d7dc', '#000']
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div
        className="absolute inset-0"
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(0, 215, 220, 0)",
            "0 0 0 2px rgba(0, 215, 220, 0.5)",
            "0 0 0 0 rgba(0, 215, 220, 0)"
          ]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </motion.div>
  );
};

export default BackButton;
