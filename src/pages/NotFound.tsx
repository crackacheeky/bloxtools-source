
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedContainer from "@/components/AnimatedContainer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-blox-gradient flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blox-teal/10 rounded-full"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      <AnimatedContainer 
        className="text-center blox-card p-12 relative z-10 backdrop-blur-lg"
        animation="bounce"
      >
        <motion.h1 
          className="text-6xl font-bold mb-4 text-blox-teal"
          animate={{ 
            textShadow: ["0px 0px 0px rgba(0,215,220,0)", "0px 0px 20px rgba(0,215,220,0.7)", "0px 0px 0px rgba(0,215,220,0)"]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          404
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-300 mb-8"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          Oops! Page not found
        </motion.p>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/" className="blox-button inline-flex">
            <motion.div
              animate={{ x: [-3, 0, -3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Home size={18} />
            </motion.div>
            <span className="ml-2">Return to Home</span>
          </Link>
        </motion.div>
      </AnimatedContainer>
    </div>
  );
};

export default NotFound;
