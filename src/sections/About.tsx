import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { Code, Briefcase, Cpu, Palette } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const services = [
    {
      icon: <Code size={24} />,
      title: 'Web Development',
      description: 'Building responsive and performant websites using modern frameworks and technologies.',
    },
    {
      icon: <Cpu size={24} />,
      title: 'Frontend Architecture',
      description: 'Designing scalable and maintainable frontend architecture for complex applications.',
    },
    {
      icon: <Palette size={24} />,
      title: 'UI/UX Integration',
      description: 'Transforming design mockups into pixel-perfect, interactive interfaces.',
    },
    {
      icon: <Briefcase size={24} />,
      title: 'Code Reviews',
      description: 'Providing expert code reviews and mentorship to maintain high code quality.',
    },
  ];
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
      },
    }),
  };

  return (
    <section id="about" className="section bg-background">
      <div className="container">
        <SectionHeading 
          title="About Me" 
          subtitle="Get to know me and the services I provide" 
        />
        
        <motion.div 
          className="max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-white">Front-End Developer with a passion for creating beautiful web experiences</h3>
          
          <p className="text-gray-300 mb-6">
            I'm a skilled front-end developer with 1+ years of experience in building responsive and 
            user-friendly web applications. My expertise includes React, TypeScript, and modern CSS 
            frameworks like Tailwind.
          </p>
          
          <p className="text-gray-300 mb-6">
            I specialize in creating intuitive user interfaces that blend creativity with technical 
            precision. My goal is to build applications that not only look great but also deliver 
            exceptional user experiences across all devices.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-medium mb-3">Location:</h4>
              <p className="text-gray-400">Menya, Egypt</p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-3">Email:</h4>
              <p className="text-gray-400">ahmadmostafa.webb@gmail.com</p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-3">Availability:</h4>
              <p className="text-gray-400">Freelance / Full-time</p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-3">Experience:</h4>
              <p className="text-gray-400">1+ Years</p>
            </div>
          </div>
        </motion.div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-center mb-10 text-white">Services I Offer</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" ref={ref}>
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 hover:border-primary/50 transition-all duration-300"
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={index}
                whileHover={{ y: -10, boxShadow: '0 10px 25px -5px rgba(139, 92, 246, 0.1)' }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center text-primary mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-medium text-white mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;