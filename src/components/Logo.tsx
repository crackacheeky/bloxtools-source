
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <motion.div 
        className="w-10 h-10 bg-white flex items-center justify-center rounded-md"
        whileHover={{ rotate: 15 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div 
          className="w-2 h-2 bg-black"
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
    </Link>
  );
};

export default Logo;
