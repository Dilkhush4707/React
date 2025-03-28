"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  // Animation variants for letter cracking effect
  const letterVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      rotateX: -90,
      filter: "blur(10px)"
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
        delay: i * 0.075,
      }
    }),
    hover: {
      y: [0, -10, 0],
      color: "#3B82F6",
      transition: {
        duration: 0.3
      }
    }
  };

  const nameArray = "Dilkhush Jangid".split("");

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 px-6 md:px-12 bg-opacity-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="backdrop-blur-sm bg-white/5 dark:bg-black/5 p-8 rounded-2xl shadow-lg"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hello, I'm{" "}
            <span className="inline-block">
              {nameArray.map((letter, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  variants={letterVariants}
                  className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-500 dark:to-purple-600 transform-gpu"
                  style={{ 
                    display: "inline-block",
                    perspective: "1000px"
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
            Frontend Developer
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            I build responsive, accessible, and performant web applications with
            modern technologies.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-500 dark:to-purple-600 text-white font-medium py-3 px-6 rounded-full shadow-md"
            >
              Contact Me
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white dark:bg-transparent border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-medium py-3 px-6 rounded-full shadow-sm"
            >
              View Projects
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="w-full h-full relative overflow-hidden rounded-full shadow-2xl border-4 border-white dark:border-gray-800">
            {/* Circular profile image */}
            <img 
              src="/img/hero.jpg" 
              alt="Profile picture of Dilkhush Jangid"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 shadow-inner ring-1 ring-inset ring-black/10 dark:ring-white/10 rounded-[40px]"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 