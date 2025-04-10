
import React from 'react';
import BackButton from '@/components/BackButton';
import BotFollowersForm from '@/components/BotFollowersForm';
import VideoTutorial from '@/components/VideoTutorial';
import AnimatedContainer from '@/components/AnimatedContainer';
import { motion } from 'framer-motion';

const BotFollowers = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 relative">
        <BackButton />
        
        <AnimatedContainer 
          className="mb-12 relative z-10" 
          animation="slideUp"
        >
          <motion.h1 
            className="text-4xl font-bold mb-2 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            BloxTools
          </motion.h1>
          
          <motion.p 
            className="text-center text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Bot followers with ease, with this brand new powershell-based system!
          </motion.p>
          
          <motion.div 
            className="w-20 h-1 bg-blox-teal/70 mx-auto mt-4"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          />
        </AnimatedContainer>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedContainer animation="slideRight" delay={0.3}>
            <BotFollowersForm />
          </AnimatedContainer>
          
          <AnimatedContainer animation="slideUp" delay={0.5}>
            <VideoTutorial />
          </AnimatedContainer>
        </div>
        
        {/* Background animated elements */}
        <motion.div 
          className="absolute top-1/4 right-10 w-32 h-32 rounded-full bg-blox-teal/5 -z-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/4 left-10 w-40 h-40 rounded-full bg-blox-teal/5 -z-10"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
    </div>
  );
};

export default BotFollowers;
