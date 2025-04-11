import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { socialLinks } from '../config/socialLinks';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const handleChange = e => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg }
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg }
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));

    // Use environment variable for API endpoint
    const endpoint = process.env.REACT_APP_CONTACT_ENDPOINT || 'https://formspree.io/f/xoverann';
    
    axios.post(endpoint, formData)
      .then(response => {
        handleServerResponse(true, "Thank you! Your message has been sent.");
      })
      .catch(error => {
        handleServerResponse(false, error.response?.data?.error || "An error occurred. Please try again later.");
      });
  };

  return (
    <main className="container mx-auto px-4 py-8 pt-24">
      <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Get In Touch</h2>
          
          <div className="flex flex-col md:flex-row gap-12">
            {/* Contact Form */}
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto"
              >
                <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
                  {status.submitted ? (
                    <div className="text-center py-12">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <svg 
                          className="w-16 h-16 text-green-500 mx-auto mb-4" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                        <p className="text-gray-600 dark:text-gray-300">{status.info.msg}</p>
                        <button 
                          onClick={() => setStatus({
                            submitted: false,
                            submitting: false,
                            info: { error: false, msg: null }
                          })}
                          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          Send Another Message
                        </button>
                      </motion.div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {status.info.error && (
                        <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                          {status.info.msg}
                        </div>
                      )}
                      <div>
                        <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
                          Message
                        </label>
                        <textarea
                          id="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="4"
                          className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500"
                          required
                        ></textarea>
                      </div>
                      <button 
                        type="submit" 
                        className="btn w-full flex justify-center items-center"
                        disabled={status.submitting}
                      >
                        {status.submitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          'Send Message'
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Contact Information */}
            <div className="md:w-1/2">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg h-full">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Contact Information</h3>
                <p className="mb-6 text-gray-600 dark:text-gray-300">Feel free to reach out to me for any questions or opportunities!</p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="font-medium mr-2 text-gray-700 dark:text-gray-300">Email:</span>
                    <a href="mailto:emmanuelmuhindo39@gmail.com" className="text-blue-600 hover:underline dark:text-blue-400">
                      emmanuelmuhindo39@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium mr-2 text-gray-700 dark:text-gray-300">Phone:</span>
                    <span className="text-gray-600 dark:text-gray-300">+256 (760) 60-3238</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium mr-2 text-gray-700 dark:text-gray-300">Location:</span>
                    <span className="text-gray-600 dark:text-gray-300">Kampala, UG</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Connect with me</h4>
                  <div className="flex gap-4">
                    <a 
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                      aria-label="LinkedIn Profile"
                    >
                      <FaLinkedin className="text-2xl" />
                    </a>
                    <a 
                      href={socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                      aria-label="GitHub Profile"
                    >
                      <FaGithub className="text-2xl" />
                    </a>
                    <a 
                      href={socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-blue-400 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                      aria-label="Twitter Profile"
                    >
                      <FaTwitter className="text-2xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;