import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { useInView } from 'react-intersection-observer';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const frontendSkills: Skill[] = [
    { name: 'React', level: 90, icon: '⚛️' },
    { name: 'TypeScript', level: 85, icon: '🔷' },
    { name: 'JavaScript', level: 95, icon: '🟨' },
    { name: 'HTML & CSS', level: 90, icon: '🎨' },
    { name: 'Tailwind CSS', level: 85, icon: '🌊' },
    { name: 'Next.js', level: 80, icon: '▲' },
    { name: 'Redux', level: 75, icon: '🔄' },
    { name: 'Framer Motion', level: 70, icon: '🎭' },
  ];
  
  const otherSkills: Skill[] = [
    { name: 'Git', level: 85, icon: '📊' },
    { name: 'UI/UX Design', level: 70, icon: '🎯' },
    { name: 'Jest & Testing', level: 75, icon: '🧪' },
    { name: 'Responsive Design', level: 90, icon: '📱' },
    { name: 'Performance Optimization', level: 80, icon: '⚡️' },
    { name: 'Figma', level: 75, icon: '🎨' },
    { name: 'RESTful APIs', level: 85, icon: '🔌' },
    { name: 'GraphQL', level: 65, icon: '🔺' },
  ];
  
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  
  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: { duration: 1, ease: "easeOut" }
    }),
  };

  return (
    <section id="skills" className="section bg-background-lighter">
      <div className="container">
        <SectionHeading 
          title="My Skills" 
          subtitle="Expertise and technologies I work with"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16" ref={ref}>
          <div>
            <motion.h3 
              className="text-2xl font-semibold mb-8 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Frontend Development
            </motion.h3>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-6"
            >
              {frontendSkills.map((skill, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{skill.icon}</span>
                      <h4 className="text-lg text-white">{skill.name}</h4>
                    </div>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-primary to-accent-pink rounded-full"
                      variants={progressVariants}
                      custom={skill.level}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <div>
            <motion.h3 
              className="text-2xl font-semibold mb-8 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Other Skills
            </motion.h3>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-6"
            >
              {otherSkills.map((skill, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{skill.icon}</span>
                      <h4 className="text-lg text-white">{skill.name}</h4>
                    </div>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-accent-blue to-accent-green rounded-full"
                      variants={progressVariants}
                      custom={skill.level}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        
        <div className="mt-24">
          <motion.h3 
            className="text-2xl font-semibold text-center mb-10 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Technologies I Use
          </motion.h3>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 
              'Next.js', 'Redux', 'Node.js', 'Git', 'REST API', 'GraphQL', 
              'Framer Motion', 'Figma', 'Jest', 'Webpack', 'Vite', 'Sass'
            ].map((tech, index) => (
              <motion.div 
                key={index}
                className="px-6 py-3 bg-gray-800 rounded-full text-gray-300 hover:text-white hover:shadow-glow-sm hover:border-primary hover:bg-gray-700 transition-all duration-300 border border-gray-700"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;