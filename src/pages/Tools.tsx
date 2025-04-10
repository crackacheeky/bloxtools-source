
import React from 'react';
import Navbar from '@/components/Navbar';
import ToolCard from '@/components/ToolCard';
import { motion } from 'framer-motion';
import AnimatedContainer from '@/components/AnimatedContainer';

const Tools = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.5
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15 
      } 
    }
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Navbar />
        
        <AnimatedContainer 
          className="text-center mb-12" 
          animation="fadeIn"
        >
          <motion.h1 
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Our Tools
          </motion.h1>
          <motion.p 
            className="text-gray-400 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Select the tool you want to use
          </motion.p>
          
          <motion.div 
            className="w-20 h-1 bg-blox-teal/70 mx-auto mt-4"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
        </AnimatedContainer>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <ToolCard
              title="Copy Games"
              description="Copy any game super efficiently and with ease!"
              features={[
                "Advanced game copy AI",
                "Class S Support",
                "Frequent Updates",
                "Multiple working bots"
              ]}
              buttonLink="/copy-games"
              toolName="Copy Games Tool"
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <ToolCard
              title="Copy Clothes"
              description="Fastest clothing copier! Faster then the competition."
              features={[
                "Fast and easy shirt copier",
                "Class S Support",
                "Unlimited uses",
                "Advanced clothing copying bots"
              ]}
              buttonLink="/copy-clothes"
              toolName="Copy Clothes Tool"
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <ToolCard
              title="Follow Bot"
              description="This tool used to cost money but we made it free!"
              features={[
                "Thousands of bots ready to follow",
                "Class S Support",
                "Unlimited uses",
                "100% uptime to date"
              ]}
              buttonLink="/bot-followers"
              toolName="Follow Bot Tool"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Tools;
