
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <motion.div 
        className="w-10 h-10 bg-white flex items-center justify-center rounded-md"
        whileHover={{ rotate: 15, scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="w-2 h-2 bg-black"
          animate={{ 
            scale: [1, 1.5, 1],
            backgroundColor: ['#000', '#00d7dc', '#000']
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </motion.div>
    </Link>
  );
};

export default Logo;
