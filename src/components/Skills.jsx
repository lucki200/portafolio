import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaTools, FaDocker, FaGitAlt, FaFigma } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <FaReact className="text-5xl text-cyan-400 mx-auto mb-4 animate-spin-slow" />,
      items: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
    },
    {
      category: "Backend",
      icon: <FaNodeJs className="text-5xl text-green-400 mx-auto mb-4 animate-pulse" />,
      items: ["Node.js", "Express", "MongoDB", "SQL"],
    },
    {
      category: "Tools",
      icon: <FaTools className="text-5xl text-yellow-400 mx-auto mb-4 animate-bounce" />,
      items: ["Git", "Postman", "Figma", "Docker"],
    },
  ];

  return (
    <section id="skills" className="relative py-32 bg-black text-white overflow-hidden">
      {/* Fondo de estrellas animado */}
      <div className="absolute inset-0 space-background z-0"></div>

      <motion.h2
        className="text-6xl font-extrabold text-center text-orange-500 mb-16 relative z-10 glow-text"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        My Skills 🚀
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto relative z-10">
        {skills.map((skillSet, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-10 rounded-2xl shadow-2xl border border-orange-400 transform transition-all hover:scale-110 hover:shadow-orange-500 group"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            {skillSet.icon}
            <h3 className="text-4xl font-semibold text-teal-400 mb-6 text-center uppercase tracking-wide">
              {skillSet.category}
            </h3>
            <ul className="space-y-4 text-center">
              {skillSet.items.map((skill) => (
                <motion.li
                  key={skill}
                  className="text-gray-300 text-2xl flex items-center justify-center gap-3 transition transform group-hover:scale-110"
                  whileHover={{ scale: 1.2 }}
                >
                  <span className="text-orange-400">⚡</span> {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center relative z-10">
        <motion.a
          href="#contact"
          className="px-12 py-6 bg-gradient-to-r from-orange-500 to-yellow-500 text-3xl font-bold rounded-full shadow-2xl tracking-wide transition-all transform hover:scale-110"
          whileHover={{ scale: 1.2 }}
        >
          Contact Me
        </motion.a>
      </div>

      {/* Estilo del fondo de estrellas */}
      <style jsx>{`
        .space-background {
          background: url("https://www.transparenttextures.com/patterns/stardust.png") repeat;
          animation: move-stars 50s linear infinite;
        }
        @keyframes move-stars {
          from { transform: translateY(0); }
          to { transform: translateY(-1500px); }
        }
        .glow-text {
          text-shadow: 0 0 20px #ff8c00, 0 0 30px #ff8c00, 0 0 40px #ff8c00;
          font-family: 'Orbitron', sans-serif;
          animation: pulse-glow 3s infinite alternate;
        }
        @keyframes pulse-glow {
          from { text-shadow: 0 0 30px #ff8c00, 0 0 40px #ff8c00; }
          to { text-shadow: 0 0 50px #ff4500, 0 0 70px #ff4500; }
        }
      `}</style>
    </section>
  );
};

export default Skills;
