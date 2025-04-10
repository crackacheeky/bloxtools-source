
import React from 'react';
import Navbar from '@/components/Navbar';
import ToolCard from '@/components/ToolCard';

const Tools = () => {
  return (
    <div className="min-h-screen bg-blox-gradient">
      <div className="container mx-auto px-4 py-8">
        <Navbar />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
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
        </div>
      </div>
    </div>
  );
};

export default Tools;
