import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github,Linkedin, Moon, Sun } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Get current scroll position
      const scrollPosition = window.scrollY + 100;
      
      // Get all sections
      const sections = document.querySelectorAll('section[id]');
      
      // Check which section is currently in view
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClass = isScrolled
    ? 'bg-background-lighter/80 backdrop-blur-md shadow-md'
    : 'bg-transparent';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClass}`}>
      <nav className="container mx-auto py-4 flex items-center justify-between">
        <motion.a 
          href="#home" 
          className="text-2xl font-bold text-white"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary">Ahmad</span> Mustafa
        </motion.a>
        
        {/* Desktop Nav Links */}
        <motion.div 
          className="hidden md:flex items-center space-x-1"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {navLinks.map((link, index) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
            >
              {link.name}
            </a>
          ))}
        </motion.div>
        
        {/* Social Links and Theme Toggle */}
        <motion.div 
          className="hidden md:flex items-center space-x-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            <Linkedin size={20} />
          </a>
          
        </motion.div>
        
        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden text-gray-300 hover:text-white transition-colors duration-300"
          onClick={toggleMenu}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </motion.button>
      </nav>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-background-lighter z-50 flex flex-col p-5"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center mb-10">
              <a href="#home" className="text-2xl font-bold text-white" onClick={closeMenu}>
                <span className="text-primary">John</span>Doe
              </a>
              <button 
                className="text-gray-300 hover:text-white transition-colors duration-300"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col space-y-6 text-center text-xl">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className={`py-2 text-gray-300 hover:text-white transition-colors duration-300 ${activeSection === link.href.substring(1) ? 'text-white font-medium' : ''}`}
                  onClick={closeMenu}
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="mt-auto pt-10 flex justify-center space-x-8">
              <a href="https://github.com/ahmadmusta22" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/ahmad-mostafa-b30607340/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin size={24} />
              </a>
              {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter size={24} />
              </a> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;