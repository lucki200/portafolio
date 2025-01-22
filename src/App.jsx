import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import avatar from "../public/avatar2.png"; // Usa la imagen generada
import { ParallaxProvider } from "react-scroll-parallax";


const App = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleStart = () => {
    setIsLoading(true); // Inicia la animación de carga
    setTimeout(() => {
      setIsLoading(false);
      setIsStarted(true); // Muestra el portafolio
    }, 3000); // Simula 3 segundos de carga
  };

  if (!isStarted) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white relative overflow-hidden">
        {/* Efecto de fondo dinámico */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="animate-pulse opacity-30 bg-gradient-to-br from-teal-500 via-purple-600 to-pink-500 w-full h-full blur-[200px]"></div>
        </div>

        {/* Fuegos Artificiales y Efectos */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="fireworks neon-glow"></div>
          <div className="fireworks delay-2 neon-glow"></div>
          <div className="fireworks delay-4 neon-glow"></div>
        </div>

        {/* Contenido principal */}
        {!isLoading ? (
          <>
            <div className="relative group">
              <img
                src={avatar}
                alt="Avatar"
                className="w-40 h-40 rounded-full shadow-[0_0_30px_rgba(255,165,0,0.6)] transition-transform duration-300 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 rounded-full border-4 border-teal-400 animate-spin-slow"></div>
            </div>

            <h1 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mt-8 drop-shadow-lg tracking-wide">
              Welcome to My Future
            </h1>

            <p className="text-lg text-gray-400 mt-4 max-w-lg text-center leading-relaxed">
              Explore my projects, skills, and experience through an immersive
              experience.
            </p>

            <button
              onClick={handleStart}
              className="mt-10 px-10 py-4 bg-gradient-to-r from-blue-500 to-teal-400 hover:from-teal-400 hover:to-blue-500 text-white text-xl font-semibold rounded-full shadow-lg tracking-wide transition-all transform hover:scale-110 focus:ring-4 focus:ring-blue-300"
            >
              Enter the Future
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center mt-8">
            <img
              src={avatar}
              alt="Loading Avatar"
              className="w-32 h-32 rounded-full animate-pulse mb-4"
            />
            <p className="text-lg text-gray-400 tracking-wide animate-bounce">
              Initializing Systems...
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <ParallaxProvider>
      <div className="bg-gray-900 text-white min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </ParallaxProvider>
  );
};

export default App;
