
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ToolCardProps {
  title: string;
  tag?: string;
  description: string;
  features: string[];
  buttonText?: string;
  buttonLink: string;
  toolName: string;
}

const ToolCard: React.FC<ToolCardProps> = ({
  title,
  tag = "BloxTools",
  description,
  features,
  buttonText = "Try Now",
  buttonLink,
  toolName
}) => {
  return (
    <div className="blox-card h-full flex flex-col">
      <div className="p-6 flex-1">
        <h2 className="text-xl font-bold mb-1 flex items-center gap-2">
          {title} <span className="text-sm text-blox-teal">({tag})</span>
        </h2>
        
        <p className="text-gray-400 mb-6 border-b border-white/10 pb-6">
          {description}
        </p>
        
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check className="text-blox-teal" size={18} />
              <span className="text-gray-300">{feature}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="p-6 border-t border-white/10 mt-6">
        <h3 className="font-bold mb-1">Try it now!</h3>
        <p className="text-gray-400 text-sm mb-4">{toolName}</p>
        
        <Link 
          to={buttonLink}
          className="blox-button inline-flex"
        >
          {buttonText} <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
};

export default ToolCard;
