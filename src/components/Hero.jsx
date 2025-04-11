import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { socialLinks } from '../config/socialLinks';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-24">
      {/* Added pt-24 class above to create space for the navbar */}
      
      {/* Background Elements - Subtle geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-accent/5 dark:bg-accent-dark/5"></div>
        <div className="absolute top-1/4 -left-20 w-60 h-60 rounded-full bg-accent/5 dark:bg-accent-dark/5"></div>
        <div className="absolute bottom-10 right-1/4 w-40 h-40 rounded-full bg-accent/5 dark:bg-accent-dark/5"></div>
      </div>

      <div className="container mx-auto px-4 z-10 py-16">
        {/* Added py-16 above to ensure content is centered in the visible area */}
        <div className="flex flex-col items-center text-center">
          {/* Animated Greeting */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-accent/10 dark:bg-accent-dark/10 text-accent dark:text-accent-dark text-sm font-medium">
              Full-Stack Developer
            </span>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Emmanuel Muhindo
          </motion.h1>

          {/* Tagline with Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="h-8 mb-8"
          >
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light">
              I build <span className="text-accent dark:text-accent-dark font-medium">modern</span> web experiences
            </h2>
          </motion.div>

          {/* Brief Introduction */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="max-w-2xl text-gray-600 dark:text-gray-300 mb-10 text-lg"
          >
            A passionate full-stack developer specializing in creating elegant, 
            user-centered digital experiences with modern technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <a
              href="/projects"
              className="px-8 py-3 bg-accent hover:bg-accent-dark dark:bg-accent-dark dark:hover:bg-accent text-white font-medium rounded-lg transition-colors"
            >
              View My Work
            </a>
            <a
              href="/contact"
              className="px-8 py-3 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 font-medium rounded-lg transition-colors"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex gap-6"
          >
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="Twitter Profile"
            >
              <FaTwitter className="text-2xl" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;