"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Website",
    description:
      "A modern e-commerce platform built with Next.js, featuring product listings, cart functionality, and Stripe payment integration.",
    technologies: ["Next.js", "React", "TailwindCSS", "Stripe", "MongoDB"],
    imageUrl: "/project-placeholder.jpg",
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A productivity application that helps users organize tasks, set priorities, and track progress.",
    technologies: ["React", "Redux", "Firebase", "TailwindCSS"],
    imageUrl: "/project-placeholder.jpg",
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A weather application that displays current conditions and forecasts based on user location or search.",
    technologies: ["JavaScript", "React", "OpenWeather API", "CSS"],
    imageUrl: "/project-placeholder.jpg",
    liveLink: "#",
    githubLink: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project showcases different
            skills and technologies I've worked with.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 relative">
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <p className="text-gray-500 dark:text-gray-400 p-4 text-center">
                    Project Image Placeholder
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 font-medium"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 font-medium"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 