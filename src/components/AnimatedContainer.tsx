
import React from 'react';
import { motion, MotionProps } from 'framer-motion';

interface AnimatedContainerProps extends MotionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  animation?: 'fadeIn' | 'slideUp' | 'slideRight' | 'scale' | 'bounce' | 'rotate';
  duration?: number;
}

const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
  },
  slideUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  },
  slideRight: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  },
  scale: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" }
  },
  bounce: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { 
      duration: 0.8, 
      type: "spring", 
      stiffness: 200, 
      damping: 15 
    }
  },
  rotate: {
    initial: { opacity: 0, rotate: -5 },
    animate: { opacity: 1, rotate: 0 },
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const AnimatedContainer: React.FC<AnimatedContainerProps> = ({
  children, 
  className = "", 
  delay = 0, 
  animation = "fadeIn", 
  duration,
  ...props
}) => {
  const selectedAnimation = animations[animation];
  
  const transition = {
    ...selectedAnimation.transition,
    delay: delay,
    duration: duration || selectedAnimation.transition.duration
  };

  return (
    <motion.div
      className={className}
      initial={selectedAnimation.initial}
      animate={selectedAnimation.animate}
      transition={transition}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContainer;
