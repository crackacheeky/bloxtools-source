
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { useConfig } from '@/context/ConfigContext';

const Navbar: React.FC = () => {
  const { config } = useConfig();
  
  return (
    <nav className="bg-black/40 backdrop-blur-md border border-white/5 rounded-full px-6 py-3 mb-12 flex items-center justify-between">
      <Logo />
      <div className="flex items-center gap-8">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/tools">Tools</NavLink>
        <NavLink to="/faq">FAQ</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({to, children, className}) => {
  return (
    <Link 
      to={to}
      className={`text-gray-300 hover:text-blox-teal transition-colors ${className || ''}`}
    >
      {children}
    </Link>
  );
};

export default Navbar;
