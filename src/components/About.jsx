import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCode, FaLaptopCode, FaServer, FaMobileAlt } from 'react-icons/fa';
import profileImage from '../images/profile.jpg';

const About = () => {
  const scrollToProjects = (e) => {
    e.preventDefault();
    
    // Wait for any potential rendering to complete
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        const yOffset = -80; // Adjust this value if you have a fixed header
        const y = projectsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        
        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });
      } else {
        console.error('Projects section not found');
      }
    }, 100);
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/3 mb-10 md:mb-0"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mx-auto border-4 border-accent dark:border-accent-dark shadow-lg">
                <img 
                  src={profileImage} 
                  alt="Emmanuel Muhindo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-700 rounded-full p-4 shadow-lg">
                <FaCode className="text-3xl text-accent dark:text-accent-dark" />
              </div>
            </div>
          </motion.div>
          
          {/* About Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-2/3 md:pl-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">About Me</h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm Emmanuel Muhindo, a passionate full-stack developer based in Kampala, Uganda. With a strong foundation in both frontend and backend technologies, I specialize in creating responsive, user-friendly web applications that solve real-world problems.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              My journey in web development began with a curiosity about how digital experiences are created. This curiosity evolved into a deep passion for crafting clean, efficient code and designing intuitive user interfaces. I believe that technology should enhance human experiences, and I strive to create solutions that are both technically sound and user-centered.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Beyond coding, I'm committed to continuous learning and staying updated with the latest industry trends. When I'm not building web applications, you can find me contributing to open-source projects, mentoring aspiring developers, or exploring new technologies that can expand my skill set.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <FaLaptopCode className="text-2xl text-accent dark:text-accent-dark" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Frontend Development</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    I create responsive, interactive user interfaces using modern frameworks like React, with a focus on performance and accessibility.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <FaServer className="text-2xl text-accent dark:text-accent-dark" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Backend Development</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    I build robust server-side applications and APIs using Node.js, Express, and various database technologies.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <FaMobileAlt className="text-2xl text-accent dark:text-accent-dark" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Responsive Design</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    I ensure applications work flawlessly across all devices, from desktop to mobile, using modern CSS frameworks like Tailwind.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <FaCode className="text-2xl text-accent dark:text-accent-dark" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Full-Stack Integration</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    I connect all the pieces together, from database design to deployment, creating cohesive end-to-end solutions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-4">Recent Project Highlights</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                My recent work demonstrates my versatility as a developer:
              </p>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
                <li>
                  <strong>E-commerce Platform:</strong> Developed a full-featured online store with secure payment integration, product management, and user authentication.
                </li>
                <li>
                  <strong>Content Management System:</strong> Built a custom CMS that allows non-technical users to easily manage their website content with a user-friendly interface.
                </li>
                <li>
                  <strong>Real-time Chat Application:</strong> Created a responsive chat application with instant messaging capabilities using WebSockets for real-time communication.
                </li>
                <li>
                  <strong>Data Visualization Dashboard:</strong> Designed an interactive dashboard that transforms complex data into intuitive visual representations for business analytics.
                </li>
              </ul>
            </div>
            
            <div className="mt-8">
              <Link 
                to="/projects" 
                className="inline-block px-6 py-3 bg-accent hover:bg-accent-dark dark:bg-accent-dark dark:hover:bg-accent text-white font-medium rounded-lg transition-colors"
              >
                View My Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;