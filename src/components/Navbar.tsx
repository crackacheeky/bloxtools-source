
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { useConfig } from '@/context/ConfigContext';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const { config } = useConfig();
  
  return (
    <motion.nav 
      className="bg-black/40 backdrop-blur-md border border-white/5 rounded-full px-6 py-3 mb-12 flex items-center justify-between"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Logo />
      <motion.div 
        className="flex items-center gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/tools">Tools</NavLink>
        <NavLink to="/faq">FAQ</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </motion.div>
    </motion.nav>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({to, children, className}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link 
        to={to}
        className={`text-gray-300 hover:text-blox-teal transition-colors relative ${className || ''}`}
      >
        <span>{children}</span>
        <motion.span 
          className="absolute bottom-0 left-0 w-full h-0.5 bg-blox-teal/80"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
    </motion.div>
  );
};

export default Navbar;
