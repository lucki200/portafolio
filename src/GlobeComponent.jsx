import React, { useRef, useEffect } from "react";
import Globe from "react-globe.gl";

const GlobeComponent = () => {
  const globeEl = useRef();

  useEffect(() => {
    if (globeEl.current) {
      const globeControls = globeEl.current.controls();
      globeControls.autoRotate = true;  // Rotación automática
      globeControls.autoRotateSpeed = 1.5;
      globeEl.current.pointOfView({ altitude: 2.5 }); // Ajusta la distancia de la cámara
    }
  }, []);

  // Datos de secciones en el globo
  const sections = [
    { lat: 9.082, lng: 8.6753, name: "About Me", section: "about" },
    { lat: 54.526, lng: 15.2551, name: "Projects", section: "projects" },
    { lat: 34.0479, lng: 100.6197, name: "Contact", section: "contact" },
    { lat: -25.2744, lng: 133.7751, name: "Skills", section: "skills" },
    { lat: 37.0902, lng: -95.7129, name: "Experience", section: "experience" }
   
  ];

  const handleLabelClick = (d) => {
    const section = document.getElementById(d.section);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      globeEl.current.pointOfView({ lat: d.lat, lng: d.lng, altitude: 1.5 }, 1500);
    } else {
      alert(`Section ${d.name} not found!`);
    }
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    >
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        backgroundColor="rgba(0, 0, 0, 0)"
        animateIn={true}
        labelsData={sections}
        labelLat={(d) => d.lat}
        labelLng={(d) => d.lng}
        labelText={(d) => d.name}
        labelColor={() => "orange"}
        labelSize={2}
        labelDotRadius={1.5}
        labelAltitude={0.1}
        onLabelClick={handleLabelClick}
      />
    </div>
  );
};

export default GlobeComponent;
