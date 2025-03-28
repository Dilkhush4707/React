"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const FloatingButton = () => {
  const [error, setError] = useState(false);

  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const link = e.currentTarget;
    fetch(link.href)
      .then(response => {
        if (!response.ok) {
          e.preventDefault();
          setError(true);
          throw new Error('File not found');
        }
      })
      .catch(() => {
        e.preventDefault();
        setError(true);
      });
  };

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 1.5,
        ease: "easeOut",
      }}
    >
      <motion.a
        href="/Dilkhush_Jangid_FULL_STACK.pdf"
        download
        onClick={handleDownload}
        className={`flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-500 dark:to-purple-600 text-white px-5 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-shadow ${error ? 'cursor-not-allowed opacity-75' : ''}`}
        whileHover={{ 
          scale: 1.05, 
          boxShadow: "0 15px 30px -5px rgba(59, 130, 246, 0.4)"
        }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path 
            fillRule="evenodd" 
            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" 
            clipRule="evenodd" 
          />
        </svg>
        <span className="font-medium tracking-wide">
          {error ? 'Resume Unavailable' : 'Download Resume'}
        </span>
      </motion.a>
    </motion.div>
  );
};

export default FloatingButton;