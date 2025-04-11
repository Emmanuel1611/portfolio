import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaAward } from 'react-icons/fa';

const ExperienceItem = ({ icon, period, title, company, location, description, skills }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex gap-4 mb-12"
    >
      <div className="flex-shrink-0 mt-1">
        <div className="w-12 h-12 rounded-full bg-accent dark:bg-accent-dark flex items-center justify-center text-white">
          {icon}
        </div>
      </div>
      <div className="flex-grow">
        <span className="text-sm font-medium text-accent dark:text-accent-dark block mb-1">{period}</span>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{title}</h3>
        <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-300 mb-3">
          <span className="font-medium">{company}</span>
          {location && (
            <>
              <span className="mx-2">•</span>
              <span>{location}</span>
            </>
          )}
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        {skills && (
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const workExperience = [
    {
      period: "2021 - Present",
      title: "Senior Web Developer",
      company: "SolarFlare Dev",
      location: "Kampala, Uganda",
      description: "Lead the development of responsive web applications using React and modern JavaScript frameworks. Collaborate with cross-functional teams to deliver high-quality software solutions. Mentor junior developers and contribute to architectural decisions.",
      skills: ["React", "PHP", "TypeScript", "Tailwind CSS", "Jest"]
    },
    {
      period: "2019 - 2021",
      title: "Full Stack Developer",
      company: "Carmel Digital Solutions Agency",
      location: "Kampala, Uganda",
      description: "Developed and maintained web applications for clients across various industries. Implemented frontend interfaces with React and backend services with Node.js. Worked closely with designers to translate mockups into functional interfaces.",
      skills: ["JavaScript", "React", "Node.js", "Express", "MongoDB"]
    },
    {
      period: "2018 - 2019",
      title: "Web Developer",
      company: "Agile Web Studio",
      location: "Kampala, Uganda",
      description: "Built responsive websites and e-commerce platforms for small to medium businesses. Maintained existing client websites and implemented new features based on client requirements.",
      skills: ["HTML/CSS", "JavaScript", "PHP", "WordPress", "MySQL"]
    }
  ];

  const education = [
    {
      period: "2015 - 2018",
      title: "Diploma of Science in Computer Science",
      company: "Kampala University",
      location: "Kampala, Uganda",
      description: "Focused on software engineering, web development, and database management. Participated in coding competitions and tech events. Graduated with honors.",
      skills: ["Algorithms", "Data Structures", "Software Engineering", "Database Design"]
    },
    {
      period: "2020 - 2021",
      title: "Cybersecurity Certification",
      company: "Cisco Networking Academy",
      location: "Online",
      description: "Protecting computer systems from cyber threats. Developed skills in network security, web security, cryptography, ethical hacking, and incident response.",
      skills: ["Network Security", "Web Security", "Cryptography", "Ethical Hacking", "Incident Response", "Security Tools"]
    }
  ];

  const certifications = [
    {
      period: "2022",
      title: "AWS Certified Developer - Associate",
      company: "Amazon Web Services",
      description: "Validated expertise in developing, deploying, and debugging cloud-based applications using AWS.",
      skills: ["AWS", "Cloud Computing", "Serverless", "Microservices"] 
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Experience</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey, education, and certifications that have shaped my skills and expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center"
            >
              <FaBriefcase className="mr-3 text-accent dark:text-accent-dark" />
              Work Experience
            </motion.h3>
            
            <div className="border-l-2 border-accent dark:border-accent-dark pl-8 ml-1.5">
              {workExperience.map((item, index) => (
                <ExperienceItem 
                  key={index}
                  icon={<FaBriefcase />}
                  period={item.period}
                  title={item.title}
                  company={item.company}
                  location={item.location}
                  description={item.description}
                  skills={item.skills}
                />
              ))}
            </div>
          </div>

          <div>
            {/* Education */}
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center"
            >
              <FaGraduationCap className="mr-3 text-accent dark:text-accent-dark" />
              Education
            </motion.h3>
            
            <div className="border-l-2 border-accent dark:border-accent-dark pl-8 ml-1.5 mb-16">
              {education.map((item, index) => (
                <ExperienceItem 
                  key={index}
                  icon={<FaGraduationCap />}
                  period={item.period}
                  title={item.title}
                  company={item.company}
                  location={item.location}
                  description={item.description}
                  skills={item.skills}
                />
              ))}
            </div>

            {/* Certifications */}
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center"
            >
              <FaAward className="mr-3 text-accent dark:text-accent-dark" />
              Certifications
            </motion.h3>
            
            <div className="border-l-2 border-accent dark:border-accent-dark pl-8 ml-1.5">
              {certifications.map((item, index) => (
                <ExperienceItem 
                  key={index}
                  icon={<FaAward />}
                  period={item.period}
                  title={item.title}
                  company={item.company}
                  description={item.description}
                  skills={item.skills}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;