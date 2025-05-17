import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';

import { Github, ExternalLink, } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string[];
  githubLink: string;
  liveLink: string;
}

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Fresh Cart',
      description: 'Full e-commerce web application using React.js. This project’s state management was achieved using only ContextAPI to leverage its potentials to the max. A real-world payment gateway (Stripe) was implemented in this project.',
      image: '/images/2.png',
      tags: ['React', 'Axios', 'Tailwind CSS'],
      category: ['web', 'frontend'],
      githubLink: 'https://github.com/ahmadmusta22/FreshCart',
      liveLink: 'https://fresh-cart-musta22-4avtj5884-ahmad-mustafas-projects-d8e1172c.vercel.app/',
    },
    {
      id: 2,
      title: 'Film Stream',
      description: 'This is a modern and responsive movie browsing application developed using React.js for the front-end UI and Redux Toolkit for state management. The app allows users to search, browse, and view detailed information about movies fetched from a public movie API (such as TMDB API or OMDB API).',
      image: '/images/image.png',
      tags: ['React', 'Redux', 'Framer Motion', 'Bootstrap'],
      category: ['web', 'frontend'],
      githubLink: 'https://github.com/ahmadmusta22/FilmStream',
      liveLink: 'https://example.com',
    },
    {
      id: 3,
      title: 'Notes App',
      description: 'Welcome to the Notes Manager! This web application allows users to create, read, update, and delete notes effortlessly. Built with React.js, Tailwind CSS, and several powerful libraries like Formik, Axios, Flowbite, and Yup, this app provides a smooth and intuitive user experience.',
      image: '/images/noteapp.png',
      tags: ['React js', 'Formik', 'Yup', 'tailwind CSS'],
      category: ['web', 'api' , 'frontend'],
      githubLink: 'https://github.com/ahmadmusta22/Note-s-app',
      liveLink: 'https://note-app-ten-lac.vercel.app/',
    },
    {
      id: 4,
      title: 'Recipe Finder',
      description: 'Welcome to the Recipe Finder! This web application allows users to explore a variety of delicious recipes with ease. Built using vanilla JavaScript, Api , Bootstrap, jQuery, and Font Awesome, the site is designed to be fully responsive, ensuring a seamless experience across devices.',
      image: '/images/recipes.png',
      tags: ['Vanilla js', 'Jquery', 'REST API', 'bootstrap'],
      category: ['web', 'frontend', 'api'],
      githubLink: 'https://github.com/ahmadmusta22/recipes',
      liveLink: 'https://recipes-beta-sooty.vercel.app/',
    },
    {
      id: 5,
      title: 'Quick Cart',
      description: 'A modern, responsive e-commerce web app built with React.js, Tailwind CSS, and a RESTful API, offering intuitive product browsing, detailed views, cart management, and a seamless shopping experience.',
      image: '/images/quick.png',
      tags: ['React js', 'Tailwind', 'Redux', 'Api'],
      category: ['web', 'frontend', 'api'],
      githubLink: 'https://github.com/ahmedbader862/React',
      liveLink: 'https://react-project-nine-gules-20.vercel.app/',
    },
    {
      id: 6,
      title: 'Tasty Bites',
      description: 'TastyBites is a responsive restaurant management and ordering system built with React.js and Firebase, featuring real-time database, authentication, and hosting. It enables menu browsing, order placement and tracking, content management, and live communication via an admin dashboard.',
      image: '/images/tasty.png',
      tags: ['React js', 'firebase', 'bootstrap', 'framer motion'],
      category: ['web', 'frontend'],
      githubLink: 'https://github.com/ahmedbader862/Final_Project',
      liveLink: 'https://example.com',
    }
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'web', name: 'Web' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'api', name: 'API' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category.includes(selectedCategory));

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <section id="projects" className="section bg-background">
      <div className="container">
        <SectionHeading
          title="My Projects"
          subtitle="Explore some of my recent work"
        />

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${selectedCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                className="card overflow-hidden group"
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex space-x-3">
                      <a
                        href={project.githubLink}
                        className="bg-gray-900/80 p-2 rounded-full text-white hover:bg-primary transition-colors"
                        aria-label="View GitHub repository"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href={project.liveLink}
                        className="bg-gray-900/80 p-2 rounded-full text-white hover:bg-primary transition-colors"
                        aria-label="View live project"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-800 flex justify-between items-center">
                    {/* <Button
                      variant="outline"
                      size="sm"
                      className="text-sm"
                      icon={<Code size={14} />}
                    >
                      View Details
                    </Button> */}
                    <span className="text-sm text-gray-500">
                      {project.category.join(', ')}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* <div className="text-center mt-12">
          <Button variant="primary">View All Projects</Button>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;