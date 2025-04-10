
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const BackButton: React.FC = () => {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/" className="flex items-center gap-2 text-white bg-black/40 backdrop-blur-md border border-white/5 rounded-full px-6 py-3 mb-12 w-fit hover:bg-black/60 transition-all">
        <Logo />
        <span className="text-white">GO BACK</span>
        <ArrowLeft size={16} />
      </Link>
    </motion.div>
  );
};

const Logo: React.FC = () => {
  return (
    <motion.div 
      className="w-8 h-8 bg-white flex items-center justify-center rounded-md"
      whileHover={{ rotate: 15 }}
    >
      <motion.div 
        className="w-1.5 h-1.5 bg-black"
        animate={{ 
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </motion.div>
  );
};

export default BackButton;
