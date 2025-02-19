

import { useEffect, useState } from "react";
import { Canvas} from "@react-three/fiber";
import { a, useSpring } from "@react-spring/three"; 
import { OrbitControls, useGLTF } from "@react-three/drei";

import { motion} from "framer-motion"; // Import Framer Motion

import facebook from "../assets/Updated Icons/Facebook-1.png";
import instagram from "../assets/Updated Icons/Instagram-1.png";
import twitter from "../assets/Updated Icons/Twitter-1.png";
import dribble from "../assets/Updated Icons/Dribble1.png";
import Tiktok from "../assets/Updated Icons/Tiktok-1.png";
import LinkedIn from "../assets/Updated Icons/LinkedIn-1.png";

const Model = ({ modelPath, isHovered, onHoverStart, onHoverEnd }) => {
  useGLTF.preload(modelPath); // Preload the model
  const { scene } = useGLTF(modelPath);

  // Apply shininess to the edges or the entire model
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.metalness = 0.2; // Increase shininess
      child.material.roughness = 0.2; // Make the surface smoother
      // child.material.color.set("0xffffff");
    }
  });



  // React Spring for smooth scale animation
  const { scale } = useSpring({
    scale: isHovered ? 3 : 3.2,
    config: { mass: 1, tension: 200, friction: 20 }, // Adjust spring physics for smoothness
  });

 



  return (
    <a.primitive
      object={scene}
      // Adjust the model's position
      position={[0, -1.8, 0]} // [x, y, z] to position the model in 3D space



      // Adjust the model's rotation (in radians)
      rotation={[-0.1, -0.4, -0.1]} // [x, y, z] - x=tilt forward/back, y=rotate sideways, z=spin


      // scale={3.2} // Optional: Adjust the size of the model


      scale={scale} // Bind animated scale
     

      onPointerOver={(e) => {
        console.log("Hover started on the model");
        if (onHoverStart) onHoverStart(e);
      }}
      onPointerOut={(e) => {
        console.log("Hover ended on the model");
        if (onHoverEnd) onHoverEnd(e);
      }}
    />
  );
};

const ThreedModel = () => {
  const [isHovered, setIsHovered] = useState(false);


  useEffect(() => {
    // Set hover state to true initially for a few seconds
    setIsHovered(true);
    const timer = setTimeout(() => setIsHovered(false), 3000); // Revert after 3 seconds

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);

  const icons = [
    { src: facebook, alt: "Facebook" },
    { src: instagram, alt: "Instagram" },
    { src: Tiktok, alt: "TikTok" },
    { src: LinkedIn, alt: "LinkedIn" },
    { src: twitter, alt: "Twitter" },
    { src: dribble, alt: "Dribble" },
  ];

 


  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 0 },
    visible: (i) => {
      // Default scatter logic
      const scatterX = Math.cos(i) * 200;
      const scatterY = Math.sin(i) * 200 - 100;

      // Define custom offsets for specific icons (based on index)
      const customOffsets = {
        2: { x: scatterX - 80, y: scatterY + 20 },
        1: { x: scatterX + 60, y: scatterY }, // Adjust Facebook
        5: { x: scatterX + 100, y: scatterY - 0 }, // Adjust Instagram
        // Add more custom offsets for other icons if needed
      };

      // Apply custom offsets if defined, otherwise use default scatter logic
      const x = customOffsets[i]?.x || scatterX;
      const y = customOffsets[i]?.y || scatterY;

      return {
        opacity: 1,
        scale: 1,
        x,
        y,
        transition: { delay: i * 0.1, type: "spring", stiffness: 100 },
      };
    },
    exit: { opacity: 0, scale: 0.5, y: 0, transition: { type: "spring" } },
  };

  return (
    <div
      style={{ width: "100%", height: "100vh", position: "relative" }}
      onMouseEnter={() => {
        console.log("Hover started on outer div");
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        console.log("Hover ended on outer div");
        setIsHovered(false);
      }}
    >
      {/* Animated Icons */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        {icons.map((icon, i) => (
          <motion.img
            key={i}
            src={icon.src}
            alt={icon.alt}
            className="icon"
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
            variants={iconVariants}
            custom={i} // Pass index for staggered animations
            initial="hidden"
            animate={isHovered ? "visible" : "hidden"}
            exit="exit"
          />
        ))}
      </div>

      <Canvas>
        {/* Add interaction controls */}
        <OrbitControls
          enableZoom={false} // Disable zooming
          enableRotate={false} // Disable rotation
          enablePan={true} // Allow panning
          maxPolarAngle={Math.PI / 2} // Restrict upward rotation
          minPolarAngle={0} // Restrict downward rotation
        />
        {/* Add lighting */}
        <ambientLight intensity={1.5} color={"0xffffff"} />{" "}
        {/* General ambient light */}
        <directionalLight
          position={[150, 150, 150]}
          intensity={6}
          color={"0xffffff"}
        />
        <spotLight
          position={[100, 100, 100]} // Position of the light
          angle={0.8} // Spread of the light beam
          penumbra={1} // Soft edges
          intensity={40} // Brightness
          castShadow={true} // Enable shadows
        />
        {/* Load the GLTF model */}
        <Model
          modelPath="/images/Digitally Iphone Mock up 3D.gltf"
          isHovered={isHovered}

          // onHoverStart={() => setIsHovered(true)} // Set hover state on
          // onHoverEnd={() => setIsHovered(false)} // Set hover state off
        />
      </Canvas>
    </div>
  );
};

export default ThreedModel;
















 // Icon animation variants
  // const iconVariants = {
  //   hidden: { opacity: 0, scale: 0.5, y: 0 },

  //   visible: (i) => ({
  //     opacity: 1,
  //     scale: 1,
  //     y: Math.sin(i) * 250- 100, // Scatter vertically (sin wave for variety)
  //     x: Math.cos(i) * 200, // Scatter horizontally (cos wave for variety)
  //     transition: { delay: i * 0.1, type: "spring", stiffness: 100 },
  //   }),
  //   exit: { opacity: 0, scale: 0.5, y: 0, transition: { type: "spring" } },
  // };