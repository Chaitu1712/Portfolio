"use client";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";


interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  githubLink: string;
  deploymentLink?: string;
  getIcon?: (tech: string) => React.ReactNode;
}

export default function ProjectCard({ title, description, tech, githubLink, deploymentLink, getIcon }: ProjectProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="flex flex-col justify-between p-6 rounded-2xl border border-gray-200/50 dark:border-zinc-800/50 bg-white/80 dark:bg-[#18181b]/80 backdrop-blur-md shadow-sm hover:shadow-xl dark:hover:shadow-blue-900/10 transition-all z-10 relative"
    >
      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
          {description}
        </p>
      </div>
      
      <div>
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item, index) => (
            <span key={index} className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold bg-blue-50/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 rounded-lg">
              {getIcon && getIcon(item)}
              {item}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-5">
        <a href={githubLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <FaGithub size={18} /> Source Code
        </a>
        {
        deploymentLink ? (
          <a href={deploymentLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <FaExternalLinkSquareAlt size={18} /> Live Demo
          </a>
        ) : null
        }
        </div>
      </div>
    </motion.div>
  );
}