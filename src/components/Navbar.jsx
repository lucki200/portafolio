import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
          currentSection = section.getAttribute('id');
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-lg shadow-lg z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-teal-400 neon-text cursor-pointer transition-all duration-500 hover:scale-105">
          <Link to="hero" smooth={true} duration={500}>
            My Portfolio
          </Link>
        </h1>

        {/* Menú hamburguesa para móviles */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
              </svg>
            </motion.div>
          </button>
        </div>

        <ul
          className={`absolute md:relative top-16 left-0 md:top-0 md:flex md:space-x-8 w-full md:w-auto bg-black md:bg-transparent transition-all duration-300 ease-in-out ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          {['about', 'skills', 'projects', 'contact'].map((section) => (
            <motion.li
              key={section}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`text-2xl md:text-lg font-semibold uppercase tracking-wide transition-all duration-500 py-3 md:py-0 text-center md:text-left ${
                activeSection === section ? 'text-teal-400 border-b-2 border-orange-400' : 'text-white hover:text-orange-400'
              }`}
            >
              <Link to={section} smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Efecto de línea activa */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-teal-400 transition-all duration-500"
        style={{ width: `${(activeSection && activeSection.length * 50) || 0}px`, left: activeSection ? `${activeSection.length * 20}px` : '0px' }}
      />
    </motion.nav>
  );
};

export default Navbar;
