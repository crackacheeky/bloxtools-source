
import React from 'react';
import Navbar from '@/components/Navbar';
import { Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-blox-gradient">
      <div className="container mx-auto px-4 py-8">
        <Navbar />
        
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto my-24">
          <div className="flex items-center gap-2 mb-2">
            <Star className="text-yellow-400" fill="currentColor" />
            <span className="text-white text-xl">Free, high quality Roblox</span>
          </div>
          
          <h1 className="text-6xl font-bold mb-8">
            <span className="text-white">Blox</span>
            <span className="text-blox-teal">Tools</span>
          </h1>
          
          <p className="text-gray-300 text-lg mb-8">
            Easy to use tools, with detailed instructions on how to use them! These tools consist of a shirt copier, 
            game copier, and a follower botter. We made all this just to make roblox simple again!
            <br /><br />
            [ If your account is younger than 100days it will not work its to prevent from flooding our tools ]
          </p>
          
          <Link 
            to="/bot-followers"
            className="blox-button"
          >
            Start <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
