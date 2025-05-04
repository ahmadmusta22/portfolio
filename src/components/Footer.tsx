import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-background-lighter py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <motion.a 
              href="#home" 
              className="text-2xl font-bold text-white mb-4 inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-primary">Ahmad</span> Mustafa
            </motion.a>
            <p className="text-gray-400 mt-2 max-w-md">
              Building beautiful, responsive websites and applications with modern technologies.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium text-white mb-4">Connect With Me</h3>
            <div className="flex space-x-4 mb-4">
              <motion.a 
                href="https://github.com/ahmadmusta22" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                aria-label="GitHub"
              >
                <Github size={20} />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/ahmad-mostafa-b30607340/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </motion.a>
              {/* <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </motion.a> */}
              <motion.a 
                href="mailto:john.doe@example.com" 
                className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                aria-label="Email"
              >
                <Mail size={20} />
              </motion.a>
            </div>
            <p className="text-gray-400">
            ahmadmostafa.webb@gmail.com
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500">
            &copy; {year} Ahmad Mustafa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;