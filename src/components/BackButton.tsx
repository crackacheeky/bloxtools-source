
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BackButton: React.FC = () => {
  return (
    <Link to="/" className="flex items-center gap-2 text-white bg-black/40 backdrop-blur-md border border-white/5 rounded-full px-6 py-3 mb-12 w-fit hover:bg-black/60 transition-all">
      <Logo />
      <span className="text-white">GO BACK</span>
      <ArrowLeft size={16} />
    </Link>
  );
};

const Logo: React.FC = () => {
  return (
    <div className="w-8 h-8 bg-white flex items-center justify-center rounded-md">
      <div className="w-1.5 h-1.5 bg-black"></div>
    </div>
  );
};

export default BackButton;
