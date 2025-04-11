import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaHeart } from 'react-icons/fa';
import { socialLinks } from '../config/socialLinks';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              Emmanuel Muhindo
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Full Stack Web Developer & Designer
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              <a 
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a 
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <FaGithub className="text-xl" />
              </a>
              <a 
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-400 dark:text-gray-400 dark:hover:text-white transition-colors"
                aria-label="Twitter Profile"
              >
                <FaTwitter className="text-xl" />
              </a>
            </div>
            
            <div className="text-gray-600 dark:text-gray-400 text-sm">
              <p>© {new Date().getFullYear()} All rights reserved.</p>
              <p className="flex items-center justify-center mt-1">
                Made with <FaHeart className="mx-1 text-red-500" /> by Emmanuel Muhindo
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;