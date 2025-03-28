"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-secondary dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-500 dark:to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="backdrop-blur-sm bg-white/80 dark:bg-black/20 p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">My Journey</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Hello! I'm a passionate frontend developer with a strong foundation in building
              modern web applications. I love creating user interfaces that are both
              beautiful and functional.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              My journey in web development started several years ago, and I've been
              continuously learning and improving my skills. I have experience working
              with React, Next.js, TypeScript, and various other frontend technologies.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or enjoying outdoor activities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="backdrop-blur-sm bg-white/80 dark:bg-black/20 p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Experience & Education</h3>
            
            {/* Experience */}
            {/* <div className="mb-6">
              <h4 className="text-xl font-medium mb-2 text-gray-800 dark:text-gray-200">Professional Experience</h4>
              <div className="mb-4 border-l-2 border-blue-600 dark:border-blue-500 pl-4">
                <p className="font-semibold text-gray-800 dark:text-gray-200">Frontend Developer</p>
                <p className="text-sm text-gray-700 dark:text-gray-400">Company Name | 2020 - Present</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Developed and maintained responsive web applications using React and Next.js.
                </p>
              </div>
              <div className="border-l-2 border-blue-600 dark:border-blue-500 pl-4">
                <p className="font-semibold text-gray-800 dark:text-gray-200">Web Developer Intern</p>
                <p className="text-sm text-gray-700 dark:text-gray-400">Company Name | 2019 - 2020</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Assisted in the development of web applications and learned industry best practices.
                </p>
              </div>
            </div>
             */}
            {/* Education */}
            <div>
              <h4 className="text-xl font-medium mb-2 text-gray-800 dark:text-gray-200">Education</h4>
              <div className="border-l-2 border-purple-700 dark:border-purple-600 pl-4">
                <p className="font-semibold text-gray-800 dark:text-gray-200">Bachelor's of Computer Application</p>
                <p className="text-sm text-gray-700 dark:text-gray-400">University of Rajasthan | 2023 - 2025</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 