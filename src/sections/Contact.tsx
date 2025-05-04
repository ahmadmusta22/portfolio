import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { Mail, MapPin, Phone, Linkedin, Github, } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: '@gmail',
      link: 'mailto:ahmadmostafa.webb@gmail.com',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Menya, EGYPT',
      // link: 'https://maps.google.com',
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '201024381300',
      link: 'tel:+201024381300',
    },
  ];
  
  const socialLinks = [
    {
      icon: <Github size={20} />,
      name: 'GitHub',
      link: 'https://github.com/ahmadmusta22',
    },
    {
      icon: <Linkedin size={20} />,
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/ahmad-mostafa-b30607340/',
    },
    // {
    //   icon: <Twitter size={20} />,
    //   name: 'Twitter',
    //   link: 'https://twitter.com',
    // },
  ];

  return (
    <section id="contact" className="section bg-background-lighter">
      <div className="container max-w-4xl mx-auto">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Let's connect and discuss your next project!"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12"
        >
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {contactInfo.map((info, index) => (
              <motion.a 
                key={index}
                href={info.link}
                className="flex items-start space-x-4 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-gray-800 p-3 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-white font-medium">{info.title}</h4>
                  <p className="text-gray-400 group-hover:text-primary transition-colors duration-300">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <h4 className="text-white font-medium mb-6 text-center">Connect With Me</h4>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.link}
                  className="bg-gray-800 p-4 rounded-full text-gray-400 hover:text-white hover:bg-primary transition-all duration-300"
                  whileHover={{ y: -5, backgroundColor: '#8B5CF6' }}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;