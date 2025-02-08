import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { a, useSpring } from "@react-spring/three";
import { motion } from "framer-motion";
import { useState } from "react";
import { useGLTF } from "@react-three/drei";

// Model Component
const Model = ({ modelPath, isHovered }) => {
  const { scene } = useGLTF(modelPath);

  // Apply shininess to the model's material
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.metalness = 0.2;
      child.material.roughness = 0.2;
    }
  });

  // Add hover animations (scale and position jitter)
  const { scale, position } = useSpring({
    scale: isHovered ? 3.2 : 3,
    position: isHovered
      ? [Math.random() * 0.02 - 0.01, Math.random() * 0.02 - 0.01, 0]
      : [0, 0, 0], // Subtle jitter on hover
    config: { mass: 1, tension: 300, friction: 30 },
  });

  return (
    <a.primitive
      object={scene}
      position={position}
      rotation={[-0.1, -0.4, -0.1]}
      scale={scale}
    />
  );
};

const ThreedModel = () => {
  const [isHovered, setIsHovered] = useState(false);

  const icons = [
    { src: facebook, alt: "Facebook" },
    { src: instagram, alt: "Instagram" },
    { src: Tiktok, alt: "TikTok" },
    { src: LinkedIn, alt: "LinkedIn" },
    { src: twitter, alt: "Twitter" },
    { src: dribble, alt: "Dribble" },
  ];

  // Icons shaky effect
  const iconVariants = {
    visible: {
      x: isHovered ? [0, -2, 2, 0] : 0,
      y: isHovered ? [0, 2, -2, 0] : 0,
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.3,
      },
    },
  };

  return (
    <div
      style={{ width: "100%", height: "100vh", position: "relative" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
            animate="visible"
          />
        ))}
      </div>

      <Canvas>
        <OrbitControls
          enableZoom={false}
          enableRotate={false}
          enablePan={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={0}
        />
        <ambientLight intensity={1.5} color={"0xffffff"} />
        <directionalLight position={[150, 150, 150]} intensity={6} />
        <spotLight position={[100, 100, 100]} angle={0.8} penumbra={1} intensity={40} />
        {/* Load the GLTF model */}
        <Model modelPath="/images/Digitally Iphone Mock up 3D.gltf" isHovered={isHovered} />
      </Canvas>
    </div>
  );
};

export default ThreedModel;
