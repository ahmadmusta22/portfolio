import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { ArrowRight, Download, Github } from 'lucide-react';
import ParticlesBackground from '../components/ParticlesBackground';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = 'Front-End Developer';
  const typingSpeed = 150;

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center">
      <ParticlesBackground />

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-primary text-xl md:text-2xl font-medium mb-4">Hello, I'm</h3>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Ahmad Mustafa
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 h-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="relative">
              {text}
              <span className="absolute right-[-4px] top-0 h-full w-[2px] bg-primary animate-pulse"></span>
            </span>
          </motion.div>

          <motion.p
            className="text-gray-400 text-lg mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            I create stunning, responsive websites and applications with modern technologies.
            Specializing in React, TypeScript, and tailored user experiences.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Button
              variant="primary"
              size="lg"
              icon={<ArrowRight size={18} />}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See My Work
            </Button>

            <a
              href="/Ahmad%20mostafa_cv%20(3).pdf" // URL-encoded path to the CV in the public folder
              download // Optional: triggers download instead of opening in the browser
              className="inline-block"
            >
              <Button
                variant="outline"
                size="lg"
                icon={<Download size={18} />}
              >
                Download CV
              </Button>
            </a>
          </motion.div>

          <motion.div
            className="mt-12 flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <div className="w-[100px] h-[1px] bg-gray-700"></div>
            <a
              href="https://github.com/ahmadmusta22"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <Github size={20} />
              <span>@ahmadmustafa</span>
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-white transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;