
import React from 'react';
import Navbar from '@/components/Navbar';
import AccordionFaq from '@/components/AccordionFaq';
import AnimatedContainer from '@/components/AnimatedContainer';
import { motion } from 'framer-motion';

const FAQ = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Navbar />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative mb-12"
        >
          <AnimatedContainer
            animation="slideUp"
            className="relative z-10"
          >
            <h1 className="text-4xl font-bold text-center">Frequently Asked Questions</h1>
            <motion.div 
              className="w-20 h-1 bg-blox-teal/70 mx-auto mt-4"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            />
          </AnimatedContainer>
          
          <motion.div
            className="absolute inset-0 -z-10 opacity-30"
            animate={{
              backgroundImage: [
                'radial-gradient(circle at 30% 50%, rgba(0, 215, 220, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 70% 50%, rgba(0, 215, 220, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 30% 50%, rgba(0, 215, 220, 0.3) 0%, transparent 50%)'
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        
        <AnimatedContainer
          animation="slideUp"
          delay={0.3}
          className="max-w-3xl mx-auto"
        >
          <AccordionFaq />
        </AnimatedContainer>
      </div>
    </div>
  );
};

export default FAQ;
