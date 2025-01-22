import { Parallax } from "react-scroll-parallax";
import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Typewriter from "typewriter-effect";
import { useSpring, animated } from "@react-spring/web";
import GlobeComponent from "../GlobeComponent";

export default function Hero() {
  const [jetpackVisible, setJetpackVisible] = useState(false);

  // Animación del Jet-.-
  useEffect(() => {
    setTimeout(() => setJetpackVisible(true), 1000); 
    setTimeout(() => setJetpackVisible(false), 8000); 
  }, []);

  const [hovered, setHovered] = useState(false);
  const [buttonParticles, setButtonParticles] = useState(false);
  const avatarStyle = useSpring({
    transform: hovered ? "translateY(-10px)" : "translateY(0px)",
    config: { tension: 200, friction: 10 },
  });

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const handleViewWork = () => {
    setButtonParticles(true);
    setTimeout(() => setButtonParticles(false), 500);

    const overlay = document.getElementById("flash-overlay");
    if (overlay) {
      overlay.classList.add("active");
      setTimeout(() => {
        overlay.classList.remove("active");
      }, 1000);
    }

    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Sección de proyectos no encontrada. Verifica el ID.");
    }
  };

  useEffect(() => {
    const heroTitle = document.getElementById("hero-title");
    heroTitle.classList.add("animate-fade-in");
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-black via-gray-900 to-gray-800 overflow-hidden"
    >
      
      <GlobeComponent />

    
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "#000" } },
          particles: {
            number: { value: 100, density: { enable: true, value_area: 800 } },
            color: { value: "#f97316" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            move: { enable: true, speed: 1.5, out_mode: "bounce" },
          },
        }}
      />

      {/* Fondo de Ondas SVG recuerdateeee lucas! */}
      <div className="absolute inset-0 z-10">
        <svg
          className="absolute bottom-0 w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#0099ff"
            fillOpacity="0.5"
            d="M0,128L48,122.7C96,117,192,107,288,96C384,85,480,75,576,101.3C672,128,768,192,864,213.3C960,235,1056,213,1152,186.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Avatar Animado mio */}
      <Parallax translateY={[-20, 20]}>
        <animated.img
          src="/avatar.png"
          alt="Avatar"
          className="w-40 h-40 rounded-full shadow-lg"
          style={avatarStyle}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />
      </Parallax>

      {/* Contenido Principal */}
      <div className="z-10">
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
          Crafting modern and interactive web applications for the future.
        </p>
        <h1
  id="hero-title"
  className="text-5xl md:text-7xl font-extrabold text-white mb-4 glow-text"
>
  Hi, I'm{" "}
  <span className="text-orange-500">
    <Typewriter
      options={{
        strings: ["Lucas Caneo", "a Developer", "a Creator"],
        autoStart: true,
        loop: true,
        delay: 75,
      }}
    />
  </span>
</h1>


        {jetpackVisible && (
          <div className="absolute left-0 bottom-20 w-full">
            <animated.div
              className="flex items-center animate-jetpack"
              style={{ position: "relative" }}
            >
              <img
                src="/mini-avatar.png"
                alt="Mini Yo en Jetpack"
                className="w-24 h-24"
              />
              <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg ml-4">
                <p className="text-sm">Hi there! I'm Lucas Caneo.</p>
                <p className="text-sm">Full Stack Developer 🚀</p>
                <p className="text-sm">React, Node.js, MongoDB, SQL</p>
              </div>
            </animated.div>
          </div>
        )}

        <button
          onClick={handleViewWork}
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg transition shadow-lg transform hover:scale-105"
        >
          View My Work
        </button>
      </div>

      {/* Explosión de Partículas al Clic */}
      {buttonParticles && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: { color: { value: "#000" } }, // Fondo negro
            particles: {
              number: { value: 150, density: { enable: true, value_area: 800 } }, // Más partículas
              color: { value: "#ffffff" }, // Blanco para mayor contraste
              shape: { type: "circle" },
              opacity: { value: 0.8, random: true }, // Opacidad alta
              size: { value: 5, random: true }, // Tamaño más grande
              move: { enable: true, speed: 2, out_mode: "out" }, // Movimiento más notorio
            },
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" }, // Reacción al pasar el mouse
                onClick: { enable: true, mode: "push" }, // Agregar partículas al hacer clic
              },
              modes: {
                repulse: { distance: 100, duration: 0.4 },
                push: { particles_nb: 4 },
              },
            },
          }}
        />
      )}
    </section>
  );
}