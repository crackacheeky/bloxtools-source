
import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="w-10 h-10 bg-white flex items-center justify-center rounded-md">
        <div className="w-2 h-2 bg-black"></div>
      </div>
    </Link>
  );
};

export default Logo;
