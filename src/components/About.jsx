import { motion } from "framer-motion";
import React from "react";
import Particles from "react-tsparticles";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-gray-900 to-black text-white py-32 px-16 overflow-hidden min-h-screen flex flex-col items-center justify-center"
    >
      <Particles
        className="absolute inset-0 pointer-events-none"
        options={{
          particles: {
            number: { value: 300 },
            size: { value: 3 },
            move: { speed: 3 },
            opacity: { value: 0.5 },
            color: { value: "#00FFFF" },
            line_linked: { enable: true, color: "#00FFFF" },
          },
        }}
      />

      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-8xl font-bold text-white futuristic-title text-center mt-10 mb-16 tracking-widest drop-shadow-2xl"
      >
        About Me
      </motion.h2>

      <motion.div
        className="relative mx-auto flex flex-col items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
      <motion.div
  className="relative flex justify-center items-center"
  animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
>
  <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full border-8 border-teal-400 overflow-hidden shadow-2xl">
    <img
      src="/profile.png"
      alt="My Photo"
      className="w-full h-full object-cover object-top"
      style={{
        filter: "contrast(110%) brightness(1.1) saturate(1.2) drop-shadow(0 0 15px #14f1ff)",
        imageRendering: "high-quality",
      }}
    />
  </div>
</motion.div>



        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-2xl text-center max-w-6xl mt-10 leading-relaxed bg-opacity-20 bg-black p-8 rounded-lg shadow-lg border border-teal-300 backdrop-blur-md"
        >
          My journey in programming started with the game Habbo, where I replicated the game to play online and obtain free items. At 19, I pursued my studies and graduated as a Computer Engineer at the end of 2023. Programming has become my passion, and I constantly work on new projects. Recently, inspired by my fitness journey, I'm developing a fitness app. I have been in Ireland for a year, adapting to the culture and improving my English while seeking new opportunities in a dynamic company.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-16">
        {["Experience", "Life in Ireland", "Personal Insights"].map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index === 0 ? -150 : index === 2 ? 150 : 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.5 }}
            className="bg-gray-900 rounded-xl p-12 border border-yellow-400 shadow-xl hover:scale-110 transition-transform relative"
          >
            <h3 className="text-5xl font-semibold text-yellow-300 text-center mb-6 uppercase">
              {category}
            </h3>
            <ul className="text-gray-300 space-y-6 text-center text-2xl">
              {index === 0 && (
                <>
                  <li>Full Stack Developer at RBU Chile</li>
                  <li>Software Developer for Las Condes Municipality</li>
                  <li>MERN Stack specialist with 2+ years of experience</li>
                  <li>Project Management and Agile Methodologies</li>
                </>
              )}
              {index === 1 && (
                <>
                  <li>Learning about Irish culture and traditions</li>
                  <li>Improving my English proficiency every day</li>
                  <li>Enjoying the beautiful landscapes and outdoor activities</li>
                  <li>Engaging with the local tech community</li>
                </>
              )}
              {index === 2 && (
                <>
                  <li>Highly motivated and passionate about programming</li>
                  <li>Always seeking new challenges and opportunities to grow</li>
                  <li>Committed to delivering high-quality solutions</li>
                  <li>Inspired by technology and continuous learning</li>
                </>
              )}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="mt-20 text-center"
      >
        <a
          href="/cv.pdf"
          download
          className="px-16 py-8 bg-gradient-to-r from-blue-500 to-teal-400 hover:from-teal-400 hover:to-blue-500 text-white text-4xl font-bold rounded-full shadow-2xl tracking-wide transition-all transform hover:scale-110"
        >
          Download My CV
        </a>
      </motion.div>
    </section>
  );
};

export default About;