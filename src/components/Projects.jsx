import { motion } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";


const planetTextures = [
  "/textures/earth.jpg",
  "/textures/mars.jpg",
  "/textures/jupiter.jpg",
  "/textures/venus.jpg",
  "/textures/saturn.jpg",
  "/textures/neptune.jpg",
  "/textures/uranus.jpg",
  "/textures/mercury.jpg",
];

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("https://api.github.com/users/lucki200/repos");
        setProjects(response.data.slice(0, 8));
      } catch (error) {
        console.error("Error fetching GitHub repos:", error);
      }
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 bg-black text-white">
    <div ref={sectionRef} className="relative h-screen w-screen bg-black flex flex-col items-center justify-center overflow-hidden">
      <motion.h2
        className="absolute top-16 text-7xl font-extrabold text-white futuristic-title text-center w-full z-50"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        MY PROJECTS
      </motion.h2>

      <motion.p
        className="absolute top-36 text-xl text-gray-400 max-w-3xl text-center leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Discover a collection of my latest projects, showcasing my skills in full-stack development and problem-solving.
      </motion.p>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-16 relative z-10 mt-32"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ staggerChildren: 0.5 }}
      >
        {projects.length > 0 ? (
          projects.map((project, idx) => (
            <motion.div
              key={project.id}
              className="relative planet-container cursor-pointer"
              initial={{ opacity: 0, scale: 0 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 + idx * 0.3, ease: "easeOut" }}
              whileHover={{ scale: 1.2, rotate: 5, boxShadow: "0px 0px 30px rgba(0,255,255,1)" }}
              onClick={() => window.open(project.html_url, "_blank")}
            >
              <div
                className="w-48 h-48 bg-cover bg-center rounded-full border-4 border-teal-400 shadow-lg"
                style={{ backgroundImage: `url(${planetTextures[idx % planetTextures.length]})` }}
              ></div>
              <span className="block text-white mt-4 text-center font-bold text-lg">{project.name}</span>
              <p className="text-gray-400 text-sm text-center mt-2 px-4">
                {project.description || "No description available"}
              </p>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-500 text-lg col-span-4">No projects available at the moment.</p>
        )}
      </motion.div>

      <motion.a
        href="https://github.com/lucki200"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-20 px-8 py-4 bg-teal-500 text-white font-bold rounded-full text-2xl hover:bg-teal-600 transition duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        View All Projects
      </motion.a>

      <div className="absolute inset-0 space-background"></div>
      <style jsx>{`
        .futuristic-title {
          font-family: 'Orbitron', sans-serif;
          text-shadow: 0 0 30px #00ffcc, 0 0 60px #00ffcc, 0 0 120px #00ffcc;
        }
        .space-background {
          background: url("https://www.transparenttextures.com/patterns/stardust.png") repeat;
          animation: move-stars 100s linear infinite;
        }
        @keyframes move-stars {
          from { transform: translateY(0); }
          to { transform: translateY(-1000px); }
        }
      `}</style>
    </div>
    </section>
  );
};

export default Projects;
