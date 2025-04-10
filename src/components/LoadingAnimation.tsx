
import React from 'react';
import { motion } from 'framer-motion';

interface LoadingAnimationProps {
  size?: number;
  color?: string;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ 
  size = 40, 
  color = "#00d7dc" 
}) => {
  return (
    <div className="flex justify-center items-center">
      <motion.div
        style={{ 
          width: size, 
          height: size, 
          borderRadius: '50%',
          border: `${size/10}px solid rgba(255, 255, 255, 0.1)`,
          borderTopColor: color,
        }}
        animate={{ rotate: 360 }}
        transition={{ 
          duration: 1, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />
      
      <motion.div
        style={{
          position: 'absolute',
          width: size * 0.7,
          height: size * 0.7,
          borderRadius: '50%',
          border: `${size/15}px solid rgba(255, 255, 255, 0.05)`,
          borderRightColor: color,
        }}
        animate={{ rotate: -360 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        style={{
          position: 'absolute',
          width: size * 0.4,
          height: size * 0.4,
          borderRadius: '50%',
          backgroundColor: color,
        }}
        animate={{ 
          scale: [0.8, 1.2, 0.8],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default LoadingAnimation;
